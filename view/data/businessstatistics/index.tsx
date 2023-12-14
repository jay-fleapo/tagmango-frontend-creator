import { Col, Row, Typography } from 'antd';
import React from 'react';

import { DisplayGraph } from '../../../components/common/graph';

export const BusinessStatistics = () => {
  return (
    <>
      <Row gutter={[0, 12]}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Col span={24} key={i}>
            <DisplayGraph />
          </Col>
        ))}
      </Row>
    </>
  );
};
