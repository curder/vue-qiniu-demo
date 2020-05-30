import storageService from '@/services/storageService';
import userService from '@/services/userService';

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    // eslint-disable-next-line max-len
    userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null,
  },

  mutations: {
    setToken(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      state.token = token;
    },
    setUserInfo(state, user) {
      // 更新本地缓存
      storageService.set(storageService.USER_INFO, user);
      state.userInfo = user ? JSON.parse(user) : '';
    },
  },

  actions: {
    // 登录
    login(context, { name, password }) {
      return new Promise((resolve, reject) => {
        userService.login({
          name,
          password,
        })
          // eslint-disable-next-line consistent-return
          .then(({ data }) => {
            const { code } = data;

            if (code !== 0) {
              reject(data);
            } else {
              context.commit('setToken', data.data.token);
              return userService.info();
            }
          })
          .then(({ data }) => {
            // 保存用户信息
            context.commit('setUserInfo', JSON.stringify(data.data));
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 退出登录
    logout(context) {
      // 清除token
      context.commit('setToken', '');
      storageService.set(storageService.USER_TOKEN, '');

      // 清除用户信息
      context.commit('setUserInfo', '');
      storageService.set(storageService.USER_INFO, '');
    },
  },
};

export default userModule;
