'use client';

import React from 'react';
import { Quizzes } from '../../../view/quizzes';
import { PageLayout } from '../../../view/page-layout';

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
