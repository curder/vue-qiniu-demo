import request from '@/utils/request';

// 账号列表
const index = () => request.get('accounts');

export default {
  index,
};
