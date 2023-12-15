'use client';

import React from 'react';
import { CreateTask } from '../../../../view/tasks/createtask';
import PageLayout from '@/app/layout/page';

const AddTaskPage = () => {
  return (
    <>
      <PageLayout>
        <CreateTask />
      </PageLayout>
    </>
  );
};
export default AddTaskPage;
