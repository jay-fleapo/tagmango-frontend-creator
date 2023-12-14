'use client';

import Dashboard from '../../view/dashboard';
import QuizzesPages from './quizzes/page';

export default function Home() {
  return (
    <>
      <Dashboard>
        <QuizzesPages />
      </Dashboard>
    </>
  );
}
