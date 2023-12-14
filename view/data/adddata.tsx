import React from 'react';

import { Col, Flex, Row } from 'antd';
import PageTitle from '../../components/pagetitle';
import { FormInput } from '../../components/form/input';
import { PrimaryButton } from '../../components/common/button';

export const AddData = () => {
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
            <PageTitle title='Add Data' />
          </Col>
        </Row>
        <div className='gray-box p-15'>
          <Row gutter={[16, 0]}>
            <Col span={24}>
              <FormInput
                placeholder='Select Month'
                lable='Month'
                type='month'
              />
            </Col>
            <Col span={24}>
              <FormInput
                placeholder=''
                lable='Revenue Earned'
                icon={'₹'}
                type='number'
              />
            </Col>
            <Col span={24}>
              <FormInput lable='Ad Spends' icon={'₹'} type='number' />
            </Col>
            <Col span={24}>
              <FormInput
                lable='Average Cost Per Lead'
                icon={'₹'}
                type='number'
              />
            </Col>
            <Col span={24}>
              <FormInput lable='Total Leads Generated' />
            </Col>
            <Col span={24}>
              <FormInput lable='Total Paid Customers' />
            </Col>
            <Col span={24}>
              <FormInput lable='Total Group Size' type='number' />
            </Col>
            <Col span={24}>
              <FormInput lable='ROAS' />
            </Col>
            <Col span={24}>
              <Flex gap='middle' justify='end'>
                <PrimaryButton variant='secondary' text='Cancel' />
                <PrimaryButton variant='dark' text='Save' />
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
