import React from 'react';
import style from '../../style/task.module.scss';
import {
  Col,
  Row,
  Calendar,
  CalendarProps,
  Typography,
  Card,
  Space,
  Tag,
  Checkbox,
} from 'antd';
import type { Dayjs } from 'dayjs';
import PageTitle from '../../components/pagetitle';
import { PrimaryCard } from '../../components/common/card';
import { CustomTag } from '../../components/common/tag';
import { PrimaryButton } from '../../components/common/button';
import { CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const Habit = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <>
      <div className={`${style['habit-page']} common-panel-wrapper`}>
        {/* Page Title */}
        <Row
          justify={'space-between'}
          style={{ alignItems: 'center' }}
          className='p-15'
        >
          <Col span={24}>
            <PageTitle title='Habit' />
          </Col>
        </Row>
        {/* Calendar And Complete habits Cards */}
        <div className='gray-box p-15'>
          <Row gutter={[16, 0]}>
            {/* Calendar Start */}
            <Col span={16}>
              <div style={{ background: '#fff', padding: '15px' }}>
                <Calendar onPanelChange={onPanelChange} />
              </div>
            </Col>
            {/* Habits Cards Wrapper Start */}
            <Col span={8}>
              <div
                className='complete-you-tasks-cards'
                style={{ background: '#fff', padding: '15px' }}
              >
                {' '}
                <Title
                  level={5}
                  className='sub-title'
                  style={{ marginTop: '0' }}
                >
                  Complete today's Habits
                </Title>
                <Row gutter={[0, 12]}>
                  {[1, 2, 3, 4].map((i) => (
                    <Col span={24} key={i}>
                      <PrimaryCard
                        extra={
                          <>
                            <CloseOutlined />
                          </>
                        }
                      >
                        <div className='content'>
                          <CustomTag variant='success' title='20XP' />
                          <Title level={5}>Learn - Podcast or course</Title>
                          <PrimaryButton
                            text='Mark as complete'
                            variant='secondary'
                          />
                        </div>
                      </PrimaryCard>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
