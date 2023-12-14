import React, { useState } from 'react';

import { Flex, Row, Col, Card, Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import PageTitle from '../../components/pagetitle';

import { PrimaryButton } from '../../components/common/button';
import { FormInput } from '../../components/form/input';
import { FormSelect } from '../../components/form/select';
import Dashboard from '../dashboard';

export const CreateTask = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className={`common-panel-wrapper`}>
        {/* Page Title */}
        <Row
          justify={'space-between'}
          style={{ alignItems: 'center' }}
          className='p-15'
        >
          <Col span={24}>
            <PageTitle title='Create Task' />
          </Col>
        </Row>
        <div className='gray-box p-15'>
          <Row>
            <Col span={24}>
              <FormSelect lable='Category' />
              <FormInput
                lable='Title'
                placeholder='E.g. Finish gamification'
                type='text'
              />
              <div className='form-group'>
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                  <label htmlFor='type' style={{ marginRight: '30px' }}>
                    Type
                  </label>
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction='horizontal'>
                      <Radio value={1}>One-time</Radio>
                      <Radio value={2}>Recurring</Radio>
                    </Space>
                  </Radio.Group>
                </Row>
              </div>
              {/* Check One Time */}
              <div>
                <FormInput lable='Date' type='date' />
                <FormInput lable='Time' type='time' />
              </div>
              {/* Recurring */}
              <div>
                <Row gutter={24}>
                  <Col span={12}>
                    <FormInput lable='Start date' type='date' />
                  </Col>
                  <Col span={12}>
                    <FormInput lable='End Date' type='date' />
                  </Col>
                </Row>
                <FormInput lable='Time' type='time' />
                <div className='form-group'>
                  <Row style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor='type' style={{ marginRight: '30px' }}>
                      Frequency
                    </label>
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction='horizontal'>
                        <Radio value={3}>Daily</Radio>
                        <Radio value={4}>Bi-Weekly</Radio>
                        <Radio value={5}>Weekly</Radio>
                        <Radio value={6}>Monthly</Radio>
                      </Space>
                    </Radio.Group>
                  </Row>
                </div>
                <Row gutter={24}>
                  <Col span={12}>
                    <FormInput lable='First day of the Week' type='date' />
                  </Col>
                  <Col span={12}>
                    <FormInput lable='Second day of the Week' type='week' />
                  </Col>
                </Row>
              </div>
              <Flex gap={'middle'} justify='end'>
                <PrimaryButton text='Cancel' variant='secondary' />
                <PrimaryButton text='Save' variant='dark' />
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
