'use client';

import React from 'react';
import { Quizzes } from '../../../view/quizzes';
import PageLayout from '../layout/page';

const QuizzesPages = () => {
  return (
    <>
      <PageLayout>
        <Quizzes />
      </PageLayout>
    </>
  );
};
export default QuizzesPages;
