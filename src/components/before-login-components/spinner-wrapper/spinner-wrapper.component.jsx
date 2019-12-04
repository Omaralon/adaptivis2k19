import React from 'react';

import { Spin } from 'antd';

const SpinnerWrapper = ({ isLoading, title, large, children }) => (
  <Spin spinning={isLoading} tip={title} size={large ? 'large' : 'default'}>
    {children}
  </Spin>
);

export default SpinnerWrapper;
