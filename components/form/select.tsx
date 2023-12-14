import React from 'react';

import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface Props {
  lable?: string;
}

export const FormSelect = (props: Props) => {
  return (
    <div>
      <div className='form-group'>
        {props.lable ? <label htmlFor='label'>{props.lable}</label> : ''}

        <Select
          defaultValue='Select'
          style={{ width: '100%', height: '42px' }}
          onChange={handleChange}
          options={[
            { value: 'test', label: 'Option 1' },
            { value: 'option', label: 'Option 2' },
          ]}
        />
      </div>
    </div>
  );
};
