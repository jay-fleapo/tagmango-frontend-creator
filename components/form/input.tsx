import React from 'react';

import { Input, DatePicker, TimePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

interface Props {
  label?: string;
  type?:
    | 'search'
    | 'text'
    | 'password'
    | 'email'
    | 'date'
    | 'time'
    | 'month'
    | 'week'
    | 'number';
  placeholder?: string;
  value?: string | number;
  icon?: React.ReactNode;
}

export const FormInput = (props: Props) => {
  return (
    <>
      <div className='form-group'>
        {props.label ? <label htmlFor='label'>{props.label}</label> : ''}

        {props.type === 'date' ? (
          <DatePicker
            onChange={onChange}
            style={{ width: '100%', padding: '7.5px 12px' }}
          />
        ) : props.type === 'time' ? (
          <TimePicker
            style={{ width: '100%', padding: '7.5px 12px' }}
            defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
          />
        ) : props.type === 'month' ? (
          <DatePicker
            picker='month'
            style={{ width: '100%', padding: '7.5px 12px' }}
          />
        ) : props.type === 'week' ? (
          <DatePicker
            picker='week'
            style={{ width: '100%', padding: '7.5px 12px' }}
          />
        ) : (
          <Input
            placeholder={props.placeholder}
            prefix={props.icon}
            type={props.type}
            id='label'
            style={{ padding: '7.5px 12px' }}
          />
        )}
      </div>
    </>
  );
};
