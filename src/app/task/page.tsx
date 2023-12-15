'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from '../../../style/task.module.scss';
import { Row, Col } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Tabs } from 'antd';

import { PrimaryButton } from '../../../components/common/button';
import PageTitle from '../../../components/pagetitle';
import { PrimaryCard } from '../../../components/common/card';
import { CalendarTask } from '../../../view/tasks/calendar';
import { TaskTable } from '../../../view/tasks/tasktable';
import PageLayout from '../layout/page';

const { TabPane } = Tabs;

const Task = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/task/addtask');
  };
  return (
    <>
      <PageLayout>
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
            <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
              <PrimaryButton
                text='New Task'
                variant='dark'
                onClick={handleButtonClick}
              />
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
                    <h3 style={{ margin: 0 }}>{ele.count}</h3>
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
      </PageLayout>
    </>
  );
};
export default Task;
