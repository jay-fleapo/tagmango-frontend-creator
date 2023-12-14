import React, { useState } from 'react';

import { Table, Popover, Button } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { FormInput } from '../../../components/form/input';
import { PrimaryButton } from '../../../components/common/button';
import { CustomTag } from '../../../components/common/tag';

interface DataType {
  [x: string]: any;
  key: React.Key;
  month: string;
  totalrevvenue: string;
  totalspends: string;
  averagecost: string;
  totalleads: string;
  totalpaidcustomer: string;
  totalgroupsize: string;
  roas: string;
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

export const BusinessData = () => {
  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null);

  const handlePopoverOpen = (index: number) => {
    setOpenPopoverIndex(index === openPopoverIndex ? null : index);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Month',
      dataIndex: 'month',
    },
    {
      title: 'Total Revenue Earned',
      dataIndex: 'totalrevvenue',
    },
    {
      title: 'Total Ad Spends',
      dataIndex: 'totalspends',
    },
    {
      title: 'Average Cost/Lead',
      dataIndex: 'averagecost',
    },
    {
      title: 'Total Leads Generated',
      dataIndex: 'totalleads',
    },
    {
      title: 'Total Paid Customers',
      dataIndex: 'totalpaidcustomer',
    },
    {
      title: 'Total Group Size',
      dataIndex: 'totalgroupsize',
    },
    {
      title: 'ROAS',
      dataIndex: 'roas',
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
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '1',
      month: 'Dec 2022',
      totalrevvenue: '-',
      totalspends: '-',
      averagecost: '-',
      totalleads: '-',
      totalpaidcustomer: '-',
      totalgroupsize: '-',
      roas: '-',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
  ];
  return (
    <>
      <div style={{ background: '#fff', padding: '15px' }}>
        <FormInput type='search' placeholder='Search' />
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </>
  );
};
