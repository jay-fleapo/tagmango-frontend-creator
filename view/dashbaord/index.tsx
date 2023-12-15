import { Col, Row } from 'antd';
import React from 'react';
import PageTitle from '../../components/pagetitle';

export const Dashboard = () => {
  return (
    <>
      <div className={`common-panel-wrapper`}>
        {/* Page Title */}
        <Row
          justify={'space-between'}
          style={{ alignItems: 'center' }}
          className='p-15'
        >
          <Col span={12}>
            <PageTitle title='Dashboard' />
          </Col>
        </Row>
      </div>
    </>
  );
};
