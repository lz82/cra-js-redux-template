import { AppGet, AppPost } from '@/utils/request';

// 登陆
export function checkLogin(data) {
  return AppPost('/checkLogin', data);
}

// 根据token获取用户信息
export function getUserInfoByToken(token) {
  return AppGet('/getUserByToken', { token });
}

// 登出
export function logout() {
  return AppPost('/logout');
}
