'use client';

import React from 'react';
import { Habit } from '../../../view/habit';
import Dashboard from '../dashboard/page';

const HabitPage = () => {
  return (
    <>
      <Dashboard>
        <Habit />
      </Dashboard>
    </>
  );
};
export default HabitPage;
