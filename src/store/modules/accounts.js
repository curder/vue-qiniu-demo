import accountServiceService from '@/services/accountService';

const accountModule = {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {},
  mutations: {
    // 账号列表
    retrieveAccounts(state, list) {
      state.list = list;
    },
  },
  actions: {
    // fetch a listing of the resource.
    retrieveAccounts(context) {
      return new Promise((resolve, reject) => {
        accountServiceService.index()
          .then(({ data }) => {
            context.commit('retrieveAccounts', data.data);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default accountModule;
