const personnel = [
  {
    key: 1,
    name: '玉皇大帝',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:0,
    note:'天宫大小事宜'
  },
  {
    key: 2,
    name: '祝融',
    residence:'火神宫',
    callNo:300,
    risingTime:'1001-10-01',
    status:0,
    note:'治理天南一万二千里的地方'
  },
  {
    key: 3,
    name: '共工',
    residence:'天水宫',
    callNo:300,
    risingTime:'1001-10-01',
    status:1,
    note:'治理天北一万二千里的地方'
  },
  {
    key: 4,
    name: '刑天',
    residence:'战王宫',
    callNo:350,
    risingTime:'1001-10-01',
    status:2,
    note:'抵御其他妖魔鬼怪的攻击'
  },
  {
    key: 5,
    name: '伏羲',
    residence:'青天宫',
    callNo:300,
    risingTime:'1001-10-01',
    status:3,
    note:'青天宫大小事宜'
  },
  {
    key: 6,
    name: '胥氏',
    residence:'九河神女宫',
    callNo:200,
    risingTime:'1001-10-01',
    status:4,
    note:'治理天东一万二千里的地方'
  },
  {
    key: 7,
    name: '蚩尤',
    residence:'九黎族',
    callNo:500,
    risingTime:'1001-10-01',
    status:1,
    note:'九黎族大小事宜'
  },
  {
    key: 8,
    name: '风伯雨师',
    residence:'天宫',
    callNo:300,
    risingTime:'1001-10-01',
    status:1,
    note:'掌管风'
  },
  {
    key: 9,
    name: '赤松子',
    residence:'天宫',
    callNo:200,
    risingTime:'1002-10-01',
    status:0,
    note:'神农时雨师。能入火自焚，随风雨而上下'
  },
  {
    key: 10,
    name: '力牧',
    residence:'天宫',
    callNo:300,
    risingTime:'1002-10-01',
    status:2,
    note:'涿鹿之战中战胜蚩尤'
  },
  {
    key: 11,
    name: '精卫鸟',
    residence:'天宫',
    callNo:100,
    risingTime:'1003-10-01',
    status:1,
    note:'女娃是炎帝最小的女儿，后溺水而亡，化作精卫鸟'
  },
  {
    key: 12,
    name: '瑶姬',
    residence:'天宫',
    callNo:100,
    risingTime:'1003-10-01',
    status:0,
    note:'炎帝（南方天帝赤帝）之女，名曰瑶姬，未嫁而死，葬于巫山之阳，精魂依草，实为灵芝'
  },
  {
    key: 13,
    name: '颛顼',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:3,
    note:'是中国上古部落联盟首领，“五帝”之一，姬姓；是黄帝之孙，昌意之子；中华人文始祖之一。颛顼因佐少昊有功，被封于高阳'
  },
  {
    key: 14,
    name: '羲和',
    residence:'天宫',
    callNo:400,
    risingTime:'1990-10-01',
    status:3,
    note:'中国上古神话中的太阳女神与制定时历的女神'
  },
  {
    key: 15,
    name: '娥皇',
    residence:'天宫',
    callNo:300,
    risingTime:'1990-10-01',
    status:4,
    note:'帝女→帝妃→女神'
  },
  {
    key: 16,
    name: '常羲',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:5,
    note:'中国神话传说中的月亮之母'
  },
  {
    key: 17,
    name: '后羿',
    residence:'天宫',
    callNo:300,
    risingTime:'1990-10-01',
    status:2,
    note:'射九日、诛恶兽、为民除害'
  },
  {
    key: 18,
    name: '女娲',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:1,
    note:'造物造人，补天救世；社稷福神，先灵圣贤'
  },
  {
    key: 19,
    name: '元始天尊',
    residence:'玉清山',
    callNo:500,
    risingTime:'1990-10-01',
    status:1,
    note:'道教最高神三清之一'
  },
  {
    key: 20,
    name: '灵宝天尊',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:2,
    note:'道教最高神三清之一'
  },
  {
    key: 21,
    name: '太上老君',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:1,
    note:'道教最高神三清之一'
  },
  {
    key: 22,
    name: '南极观音',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:3,
    note:'普度众生'
  },
  {
    key: 23,
    name: '崇恩圣帝',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:4,
    note:'普度众生'
  },
  {
    key: 24,
    name: '仙翁东华大帝君',
    residence:'东华宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:5,
    note:'东华宫大小事宜'
  },
  {
    key: 25,
    name: '斗姆元君',
    residence:'天宫',
    callNo:300,
    risingTime:'1990-10-01',
    status:0,
    note:'斗姆原为龙汉年间周御王的爱妃，号“紫光夫人”，先后为御王生下九子'
  },
  {
    key: 26,
    name: '嫦娥',
    residence:'天宫',
    callNo:200,
    risingTime:'1990-10-01',
    status:0,
    note:'抱着兔子看月亮'
  },
  {
    key: 27,
    name: '千里眼',
    residence:'天宫',
    callNo:200,
    risingTime:'1990-10-01',
    status:0,
    note:'看得远'
  },
  {
    key: 28,
    name: '顺风耳',
    residence:'天宫',
    callNo:200,
    risingTime:'1990-10-01',
    status:1,
    note:'耳朵好'
  },
  {
    key: 29,
    name: '七仙女',
    residence:'天宫',
    callNo:200,
    risingTime:'1990-10-01',
    status:2,
    note:'花瓶'
  },
  {
    key: 30,
    name: '花童',
    residence:'天宫',
    callNo:500,
    risingTime:'1990-10-01',
    status:1,
    note:'小仙女'
  },
];

export default personnel;
