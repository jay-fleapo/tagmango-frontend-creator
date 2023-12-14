import React from 'react';

import style from '../../style/task.module.scss';
import { Card, Col, Row } from 'antd';
import PageTitle from '../../components/pagetitle';
import { PrimaryButton } from '../../components/common/button';
import { CustomTag } from '../../components/common/tag';
import { Typography } from 'antd';

const { Title } = Typography;

export const Quizzes = () => {
  return (
    <>
      <div className={`${style['quizzes-page']} common-panel-wrapper`}>
        {/* Page Title */}
        <Row
          justify={'space-between'}
          style={{ alignItems: 'center' }}
          className='p-15'
        >
          <Col span={24}>
            <PageTitle title='Quizzes' />
          </Col>
        </Row>
        <div className='gray-box p-15'>
          <Row className='select-quizzes-card-wrapper' gutter={[12, 12]}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Col span={8} key={i}>
                <Card title='Testing title of quizzes'>
                  <Title level={5}>30 Questions</Title>
                  <PrimaryButton
                    text={
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <span>Play & Earn</span>
                        <CustomTag title='30XP' variant='success' />
                      </div>
                    }
                    variant='dark'
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};