import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import style from '../../style/task.module.scss';
import { Row, Col } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Typography, Tabs } from 'antd';

import PageTitle from '../../components/pagetitle';
import { PrimaryButton } from '../../components/common/button';
import { BusinessStatistics } from './businessstatistics';
import { BusinessData } from './businessdata';

const { TabPane } = Tabs;

const { Title } = Typography;

export const Data = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/data/adddata');
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
            <PageTitle title='Data' />
          </Col>
          <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
            <PrimaryButton
              text='Add Data'
              variant='dark'
              onClick={handleButtonClick}
            />
          </Col>
        </Row>

        {/* Calendar And My Task Tab Changing */}
        <div className='gray-box p-15'>
          <Row>
            <Col span={24}>
              <Tabs defaultActiveKey='1' onChange={() => onChange}>
                <TabPane tab='Business Statistics' key='1'>
                  <BusinessStatistics />
                </TabPane>
                <TabPane tab='Business Data' key='2'>
                  <BusinessData />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
