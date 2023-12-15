import React from 'react';

import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface Props {
  label?: string;
}

export const FormSelect = (props: Props) => {
  return (
    <div>
      <div className='form-group'>
        {props.label ? <label htmlFor='label'>{props.label}</label> : ''}

        <Select
          defaultValue='lucy'
          style={{ width: '100%', height: '42px' }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
    </div>
  );
};
