'use client';

import React from 'react';
import { Events } from '../../../view/events';
import Dashboard from '../dashboard/page';

export const EventsPage = () => {
  return (
    <>
      <Dashboard>
        <Events />
      </Dashboard>
    </>
  );
};
export default EventsPage;
