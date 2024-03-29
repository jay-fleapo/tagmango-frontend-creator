import style from '../../../style/task.module.scss';
import {
  Col,
  Row,
  Typography,
  Calendar,
  CalendarProps,
  Space,
  Checkbox,
} from 'antd';
const { Title } = Typography;
import React from 'react';
import type { Dayjs } from 'dayjs';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { PrimaryCard } from '../../../components/common/card';
import { CustomTag } from '../../../components/common/tag';
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

export const CalendarTask = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <>
      <div className={`${style['charity-page']}`}>
        <Row gutter={[16, 0]}>
          <Col span={16}>
            <div style={{ background: '#fff', padding: '15px' }}>
              <Calendar onPanelChange={onPanelChange} />
            </div>
          </Col>
          <Col span={8}>
            <div
              className='complete-you-tasks-cards'
              style={{ background: '#fff', padding: '15px' }}
            >
              <Row>
                <Title level={4} className='sub-title'>
                  Complete today's Tasks (5)
                </Title>
                <Row gutter={[0, 12]}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Col span={24} key={i}>
                      <PrimaryCard>
                        <Space
                          style={{
                            width: '100%',
                            alignItems: 'start',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Space className='strike-check-box'>
                            <Checkbox onChange={onChange}>
                              Learn - testing
                            </Checkbox>
                          </Space>
                          <span className='mock-block'>
                            <CustomTag variant='gray' title='10:00PM' />
                          </span>
                        </Space>
                      </PrimaryCard>
                    </Col>
                  ))}
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
