import React from 'react';
import { Card } from 'antd';

interface CardProps {
  title?: string | boolean;
  extra?: React.ReactNode;
  children: React.ReactNode;
}

export const PrimaryCard = ({ title, extra, children }: CardProps) => {
  return (
    <>
      <Card
        title={title}
        extra={extra}
        style={{ width: '100%' }}
        className='card'
      >
        {children}
      </Card>
    </>
  );
};
