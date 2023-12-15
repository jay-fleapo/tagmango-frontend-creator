'use client';

import React from 'react';
import { Events } from '../../../view/events';
import PageLayout from '../layout/page';

export const EventsPage = () => {
  return (
    <>
      <PageLayout>
        <Events />
      </PageLayout>
    </>
  );
};
export default EventsPage;
