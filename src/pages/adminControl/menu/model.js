import * as service from './service';

export default {
  namespace: 'menuModel',
  state: {},
  effects: {
    // 菜单列表
    *getMenuSetting({ payload, callback }, sagaEffects) {
      const { call } = sagaEffects;
      const datas = yield call(service.menuSetting, payload);
      callback(datas);
    },
    // // 查菜单下级列表
    // *getMenuChild({ payload }, sagaEffects) {
    //   const { call } = sagaEffects;
    //   // console.log('payload-----', payload);
    //   // const datas = yield call(service.menuChild, payload);
    //   // console.log('datas', datas);
    //   // callback(datas)
    // },
    // 保存
    *menuSave({ payload, callback }, sagaEffects) {
      const { call } = sagaEffects;
      const datas = yield call(service.menuSave, payload);
      callback(datas);
    },
    // 更新
    *menuUpdate({ payload, callback }, sagaEffects) {
      const { call } = sagaEffects;
      const datas = yield call(service.menuUpdate, payload);
      callback(datas);
    },
    // 删除
    *menuDelete({ payload, callback }, sagaEffects) {
      const { call } = sagaEffects;
      const datas = yield call(service.menuDelete, payload);
      callback(datas);
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
