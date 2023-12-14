import React from 'react';

import { Col, Flex, Row } from 'antd';
import PageTitle from '../../components/pagetitle';
import { FormInput } from '../../components/form/input';
import { PrimaryButton } from '../../components/common/button';
import { FormSelect } from '../../components/form/select';

export const AddCharity = () => {
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
              <FormSelect lable='Category' />
            </Col>
            <Col span={24}>
              <FormInput
                placeholder=''
                lable='Amount Donated'
                icon={'₹'}
                type='number'
              />
            </Col>
            <Col span={24}>
              <FormInput placeholder='' lable='Organisation Name' type='text' />
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
