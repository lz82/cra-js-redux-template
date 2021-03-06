import React, { memo } from 'react';
import { Breadcrumb, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import css from './index.module.less';

const BreadcrumbCom = (props) => {
  const { path } = props;
  return (
    <div className={css['breadcrumb-wrapper']}>
      <Breadcrumb>
        <Breadcrumb.Item href="/home">
          <Space>
            <HomeOutlined />
            首页
          </Space>
        </Breadcrumb.Item>
        {path?.length
          ? path.map((item, index) => {
              return item.link ? (
                <Breadcrumb.Item href={item.link} key={index}>
                  {item.text}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={index}>{item.text}</Breadcrumb.Item>
              );
            })
          : null}
      </Breadcrumb>
    </div>
  );
};

export default memo(BreadcrumbCom);
