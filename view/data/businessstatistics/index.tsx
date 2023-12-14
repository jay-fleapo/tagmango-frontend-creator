import { Col, Row, Typography } from 'antd';
import React from 'react';
import { FormInput } from '../../../components/form/input';
const { Title } = Typography;

export const BusinessStatistics = () => {
  return (
    <>
      <Row gutter={[0, 12]}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Col span={24} key={i}>
            <div
              style={{
                background: '#fff',
                padding: '15px',
              }}
            >
              <Row>
                <Col span={16}>
                  <Title level={4} className='sub-title'>
                    Revenue Earned
                  </Title>
                </Col>
                <Col span={8}>
                  <FormInput type='date' placeholder='Select Date' />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div
                    className='graph-wrapper'
                    style={{
                      position: 'relative',
                      height: '300px',
                      textAlign: 'center',
                    }}
                  >
                    Graph
                    <div className='vertical-content'>
                      <Title level={5} className='vertical-text'>
                        Revenue
                      </Title>
                    </div>
                  </div>
                </Col>
              </Row>
              <div style={{ textAlign: 'center' }}>
                <h4>Time</h4>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};
