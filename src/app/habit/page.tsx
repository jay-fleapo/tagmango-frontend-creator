'use client';

import React from 'react';
import { Habit } from '../../../view/habit';
import PageLayout from '../layout/page';

const HabitPage = () => {
  return (
    <>
      <PageLayout>
        <Habit />
      </PageLayout>
    </>
  );
};
export default HabitPage;
