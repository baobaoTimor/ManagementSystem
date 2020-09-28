import request from '@/utils/request';

// 获取菜单
export async function menuSetting() {
  return request('/api/menu/setting');
}

// 获取子集菜单
export async function menuChild(data) {
  return request('/api/menu/child', data);
}

// 保存菜单
export async function menuSave(data) {
  return request(`/api/menu/save/${data}`);
}

// 更新菜单
export async function menuUpdate(data) {
  return request(`/api/menu/update${data}`);
}

// 删除菜单
export async function menuDelete(menuCode) {
  return request(`/api/menu/delete/${menuCode}`);
}
