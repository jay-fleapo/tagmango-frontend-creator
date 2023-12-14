'use client';

import Dashboard from '../../view/dashboard';
import { CharityPage } from './pages/charity';
import { EventsPage } from './pages/events';

export default function Home() {
  return (
    <>
      <Dashboard>
        <EventsPage />
      </Dashboard>
    </>
  );
}
