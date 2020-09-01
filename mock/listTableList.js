
import { parse } from 'url';
import personnel from './PersonnelList';

// mock tableListDataSource,current,pageSize
const genList = (current) => {
  const tableListDataSource = [];
  for (let i = 0; i < personnel.length; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key:index,
      disabled: i % 6 === 0,
      name: personnel[i].name,
      owner: 'Timor',
      desc: personnel[i].note,
      callNo: personnel[i].callNo,
      status:personnel[i].status,
      createdAt: personnel[i].risingTime,
    });
  }

  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

// 处理搜索,排序的列表结果
function getRule(req, res, u) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query;
  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);
  const sorter = JSON.parse(params.sorter);

  if (sorter) {
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach(key => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }

          return;
        }

        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }

  if (params.filter) {
    const filter = JSON.parse(params.filter);

    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter(item =>
        Object.keys(filter).some(key => {
          if (!filter[key]) {
            return true;
          }

          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }

          return false;
        }),
      );
    }
  }

  // 搜索结果
  switch(params.name || params.desc || params.callNo || params.status || params.createdAt){
    case params.name:
      dataSource = dataSource.filter(data => data.name.includes(params.name || ''))
      break;
    case params.desc:
      dataSource = dataSource.filter(data => data.desc.includes(params.desc || ''))
      break;
    case params.callNo:
      dataSource = dataSource.filter(data => String(data.callNo).includes(params.callNo || 0))
      break;
    case params.status:
      dataSource = dataSource.filter(data => String(data.status).includes(params.status || 0))
      break;
    case params.createdAt:
      dataSource = dataSource.filter(data => String(data.createdAt).includes(params.createdAt || ''))
      break;
    default:
      break;
  }
  
  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };
  return res.json(result);
}

function postRule(req, res, u, b) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter(item => key.indexOf(item.key) === -1);
      break;

    case 'post':
      (() => {
        const newRule = {
          key: tableListDataSource.length,
          name,
          owner: 'Timor',
          desc,
          callNo: Math.floor(Math.random() * 100), // 刚飞升上来的月薪比例
          status: 1, // 新增的时候刚飞升
          createdAt: new Date(),
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();

      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map(item => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }

          return item;
        });
        return res.json(newRule);
      })();

      return;

    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };
  res.json(result);
}

export default {
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
};
