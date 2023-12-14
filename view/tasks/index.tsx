import React, { useState } from 'react';

import style from '../../style/task.module.scss';
import { Row, Col } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Typography, Tabs } from 'antd';

import { CalendarTask } from './calendar';
import { FormInput } from '../../components/form/input';
import { TaskTable } from './tasktable';
import Dashboard from '../dashboard';
import { PrimaryCard } from '../../components/common/card';
import PageTitle from '../../components/pagetitle';
import { PrimaryButton } from '../../components/common/button';

const { TabPane } = Tabs;

const { Title } = Typography;

export const Task = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className={`${style['task-page']} common-panel-wrapper`}>
        {/* Page Title */}
        <Row
          justify={'space-between'}
          style={{ alignItems: 'center' }}
          className='p-15'
        >
          <Col span={12}>
            <PageTitle title='Tasks' />
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <PrimaryButton text='New Task' variant='dark' />
          </Col>
        </Row>
        {/* Task Total Count Section */}
        <div className='task-count-wrapper p-r-b-l-15'>
          <Row gutter={12} className=' '>
            {[
              {
                taskName: 'Total Tasks Pending',
                count: 3,
              },
              {
                taskName: 'Total Tasks Pending',
                count: 3,
              },
              {
                taskName: 'Total Tasks Pending',
                count: 3,
              },
            ].map((ele, i) => (
              <Col key={i} span={6}>
                <PrimaryCard title={ele.taskName}>
                  <h3>{ele.count}</h3>
                </PrimaryCard>
              </Col>
            ))}
          </Row>
        </div>
        {/* Calendar And My Task Tab Changing */}
        <div className='gray-box p-15'>
          <Row>
            <Col span={24}>
              <Tabs defaultActiveKey='1' onChange={() => onChange}>
                <TabPane tab='Calendar' key='1'>
                  <CalendarTask />
                </TabPane>
                <TabPane tab='My Tasks' key='2'>
                  <div className='my-tasks-wrapper'>
                    <div className='table-wrapper'>
                      <TaskTable />
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
