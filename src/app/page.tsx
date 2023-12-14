'use client';

import Dashboard from '../../view/dashboard';
import { QuizzesPages } from './pages/quizzes';

export default function Home() {
  return (
    <>
      <Dashboard>
        <QuizzesPages />
      </Dashboard>
    </>
  );
}
