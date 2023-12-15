import { Col, Row } from 'antd';
import React from 'react';
import PageTitle from '../../../components/pagetitle';

export const PlayQuizzes = () => {
  return (
    <>
      <div className={`common-panel-wrapper`}>
        {/* Page Title */}
        <Row className='p-15'>
          <Col span={24}>
            <PageTitle title='' />
          </Col>
        </Row>
      </div>
    </>
  );
};
