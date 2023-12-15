'use client';

import React from 'react';
import { Habit } from '../../../view/habit';
import { PageLayout } from '../../../view/page-layout';

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
