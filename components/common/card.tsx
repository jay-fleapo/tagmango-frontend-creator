import React from 'react';
import { Card } from 'antd';

interface CardProps {
  title?: string | boolean;
  children: React.ReactNode;
}

export const PrimaryCard = ({ title, children }: CardProps) => {
  return (
    <>
      <Card title={title} style={{ width: '100%' }} className='card'>
        {children}
      </Card>
    </>
  );
};
