'use client';

import React from 'react';
import { Task } from '../../../view/tasks';
import Dashboard from '../dashboard/page';

const TaskPage = () => {
  return (
    <>
      <Dashboard>
        <Task />
      </Dashboard>
    </>
  );
};
export default TaskPage;
