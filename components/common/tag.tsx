import React from 'react';
import { Tag } from 'antd';

interface TagProps {
  title: string;
  variant: 'gray' | 'success';
}

export const CustomTag = ({ title, variant }: TagProps) => {
  const tagColors = variant === 'gray' ? '#e4e6eb' : '#87d068';

  return (
    <>
      <Tag
        color={tagColors}
        style={{ margin: 0, color: variant === 'gray' ? '#424242' : '#fff' }}
      >
        {title}
      </Tag>
    </>
  );
};
