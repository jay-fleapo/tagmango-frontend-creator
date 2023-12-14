'use client';

import React from 'react';
import { Quizzes } from '../../../view/quizzes';
import Dashboard from '../dashboard/page';

const QuizzesPages = () => {
  return (
    <>
      <Dashboard>
        <Quizzes />
      </Dashboard>
    </>
  );
};
export default QuizzesPages;
