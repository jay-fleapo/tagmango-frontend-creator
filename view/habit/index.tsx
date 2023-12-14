import React from 'react';

import {
  Col,
  Row,
  Calendar,
  CalendarProps,
  Typography,
  Card,
  Space,
  Tag,
} from 'antd';
import type { Dayjs } from 'dayjs';
import PageTitle from '../../components/pagetitle';

const { Title } = Typography;

export const Habit = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <>
      <PageTitle title='Habit' />
      <Row
        style={{
          border: '1px solid #050505',
          display: 'flex',
          borderRadius: 6,
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Col span={16}>
          <Calendar
            onPanelChange={onPanelChange}
            style={{ width: '100%', height: '100%' }}
          />
        </Col>
        <Col span={8} style={{ borderLeft: '1px solid #050505' }}>
          <Row style={{ padding: '30px 20px', width: '100%' }}>
            <Title level={3}>Complete today's Habits</Title>
            <Space
              direction='vertical'
              size={16}
              style={{
                width: '100%',
                height: '100vh',
                overflow: 'auto',
                paddingBottom: '40px',
              }}
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <Card
                  title={<span>20XP</span>}
                  extra={<span>1</span>}
                  style={{ width: '100%' }}
                  key={i}
                >
                  <Title level={4}>Learn - Podcast or Course</Title>
                  <Tag>Mark as complete</Tag>
                </Card>
              ))}
            </Space>
          </Row>
        </Col>
      </Row>
    </>
  );
};
