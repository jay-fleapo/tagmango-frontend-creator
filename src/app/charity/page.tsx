'use client';

import React from 'react';
import { Charity } from '../../../view/charity';
import Dashboard from '../dashboard/page';

const CharityPage = () => {
  return (
    <>
      <Dashboard>
        <Charity />
      </Dashboard>
    </>
  );
};
export default CharityPage;
