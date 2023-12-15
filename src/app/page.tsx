'use client';

import { Dashboard } from '../../view/dashbaord';
import { PageLayout } from '../../view/page-layout';

export default function Home() {
  return (
    <>
      <PageLayout>
        <Dashboard />
      </PageLayout>
    </>
  );
}
