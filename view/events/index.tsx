import { Col, Row } from 'antd';
import React from 'react';
import PageTitle from '../../components/pagetitle';
import { PrimaryButton } from '../../components/common/button';
import { EventsCard } from '../../components/common/eventscard';

export const Events = () => {
  return (
    <>
      {/* Page Title */}
      <Row
        justify={'space-between'}
        style={{ alignItems: 'center' }}
        className='p-15'
      >
        <Col span={24}>
          <PageTitle title='Events' />
        </Col>
      </Row>
      {/* Events Cards */}
      <div className='p-15'>
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Col span={6} key={i}>
              <EventsCard />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
