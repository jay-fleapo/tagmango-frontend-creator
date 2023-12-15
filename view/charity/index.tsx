import React, { useState } from 'react';

import { Col, Row, Table, Popover } from 'antd';
import style from '../../style/task.module.scss';
import { useRouter } from 'next/navigation';
import PageTitle from '../../components/pagetitle';
import { PrimaryButton } from '../../components/common/button';
import { DisplayGraph } from '../../components/common/graph';
import { FormInput } from '../../components/form/input';
import { CustomTag } from '../../components/common/tag';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { FormSelect } from '../../components/form/select';

interface DataType {
  [x: string]: any;
  key: React.Key;
  date: string;
  category: string;
  amount: number;
  organisation: string;
  status: any;
}

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};

export const Charity = () => {
  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null);

  const handlePopoverOpen = (index: number) => {
    setOpenPopoverIndex(index === openPopoverIndex ? null : index);
  };

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/charity/addcharity');
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Organisation',
      dataIndex: 'organisation',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => (
        <Popover
          content={
            <div style={{ width: '130px', padding: '5px' }}>
              <span
                onClick={() => handlePopoverOpen(index)}
                style={{ display: 'block', marginBottom: '12px' }}
              >
                Edit
              </span>
              <span
                onClick={() => handlePopoverOpen(index)}
                style={{ display: 'block' }}
              >
                Delete
              </span>
            </div>
          }
          trigger='click'
          visible={openPopoverIndex === index}
          onVisibleChange={(visible) => {
            if (!visible) {
              setOpenPopoverIndex(null);
            }
          }}
        >
          <PrimaryButton
            text=''
            variant='info'
            onClick={() => handlePopoverOpen(index)}
          />
        </Popover>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '3',
      date: '07/12/2023',
      category: 'Food',
      amount: 322332,
      organisation: 'Keto India',
      status: <CustomTag variant='success' title='Completed' />,
    },
    {
      key: '4',
      date: '03/11/2023',
      category: 'Food',
      amount: 2323,
      organisation: 'Keto India',
      status: <CustomTag variant='success' title='Completed' />,
    },
  ];
  return (
    <>
      <div className={`${style['charity-page']} common-panel-wrapper`}>
        {/* Page Title */}
        <Row
          justify={'space-between'}
          style={{ alignItems: 'center' }}
          className='p-15'
        >
          <Col span={12}>
            <PageTitle title='Charity' />
          </Col>
          <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
            <PrimaryButton
              text='Add Data'
              variant='dark'
              onClick={handleButtonClick}
            />
          </Col>
        </Row>
        <div className='gray-box p-15 charity-table'>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <DisplayGraph />
            </Col>
            <Col span={24}>
              <div style={{ background: '#fff', padding: '15px' }}>
                <Row gutter={[24, 0]} className='filter-wrapper'>
                  <Col span={6}>
                    <FormInput type='search' placeholder='Search' />
                  </Col>
                  <Col span={10}>
                    <div className='form-group filter-by'>
                      <label htmlFor='filter' style={{ marginBottom: 0 }}>
                        Filter by
                      </label>
                      <FormSelect />
                    </div>
                  </Col>
                  <Col span={8}>
                    <FormInput type='date' placeholder='Select date' />
                  </Col>
                </Row>
                <Table
                  columns={columns}
                  dataSource={data}
                  onChange={onChange}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
