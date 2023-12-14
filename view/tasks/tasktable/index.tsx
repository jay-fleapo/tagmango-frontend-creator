import React, { useState } from 'react';

import { Table, Popover, Button } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { FormInput } from '../../../components/form/input';
import { PrimaryButton } from '../../../components/common/button';
import { CustomTag } from '../../../components/common/tag';

interface DataType {
  [x: string]: any;
  key: React.Key;
  task: string;
  category: string;
  deadline: any;
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

export const TaskTable = () => {
  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null);

  const handlePopoverOpen = (index: number) => {
    setOpenPopoverIndex(index === openPopoverIndex ? null : index);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Task',
      dataIndex: 'task',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
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
      key: '1',
      task: 'Task name here Task name here ',
      category: 'Selling',
      deadline: '08/12/2020 by 06:00PM',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '2',
      task: 'Task name here',
      category: 'Selling',
      deadline: '08/12/2020 by 06:00PM',
      status: <PrimaryButton text='Mark as complete' variant='secondary' />,
    },
    {
      key: '3',
      task: 'Task name here',
      category: 'Selling',
      deadline: '01/12/2020 by 06:00PM',
      status: <CustomTag variant='success' title='Completed' />,
    },
    {
      key: '4',
      task: 'Task name here',
      category: 'Selling',
      deadline: '28/12/2020 by 06:00PM',
      status: <CustomTag variant='success' title='Completed' />,
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
