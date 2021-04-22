import { AppPost, AppGet } from '@/utils/request';

// 登陆
export function checkLogin(data) {
  return AppPost('/checkLogin', data);
}

// 根据token获取用户信息
export function getUserInfoByToken(token) {
  return AppGet('/getUserByToken', { token });
}
