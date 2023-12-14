import React from 'react';

import { Typography } from 'antd';

const { Title } = Typography;

interface Props {
  title: string;
}

const PageTitle = (props: Props) => {
  return (
    <>
      <Title level={2} className='page-title'>
        {props.title}
      </Title>
    </>
  );
};

export default PageTitle;
