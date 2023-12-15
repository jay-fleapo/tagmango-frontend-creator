'use client';

import React from 'react';
import { CreateTask } from '../../../../view/tasks/createtask';
import { PageLayout } from '../../../../view/page-layout';

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
