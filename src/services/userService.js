import request from '@/utils/request';

const login = ({ name, password }) => request.post('auth/login', {
  name,
  password,
});

const info = () => request.get('auth/info');

export default {
  login,
  info,
};
