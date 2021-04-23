import { checkLogin, clearErrMsg, getUserInfo, selectErrMsg, selectToken } from '@/store/modules/app';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import css from './index.module.less';

const Login = () => {
  const token = useSelector(selectToken);
  const errMsg = useSelector(selectErrMsg);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (value) => {
    dispatch(checkLogin(value));
  };

  useEffect(() => {
    if (token) {
      // 根据token获取用户信息
      dispatch(getUserInfo(token));
      history.push('/admin/dashboard');
    }
  }, [dispatch, history, token]);

  useEffect(() => {
    if (errMsg) {
      message.error(errMsg);
      dispatch(clearErrMsg());
    }
  }, [dispatch, errMsg]);

  return (
    <div className={css['login-wrapper']}>
      <div className={css['container']}>
        <div className={css['logo']} />
        <Form name="login" onFinish={onLogin}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input prefix={<KeyOutlined />} placeholder="请输入密码" type="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" shape="round" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
