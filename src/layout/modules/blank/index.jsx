import React from 'react';
import { Layout } from 'antd';
import PageFooter from '@/components/page-footer';
import css from './index.module.less';

const { Content } = Layout;

const LayoutBlank = (props) => {
  return (
    <Layout className={css['layout-blank']}>
      <Content className={css['content']}>{props.children}</Content>
      <PageFooter />
    </Layout>
  );
};

export default LayoutBlank;
