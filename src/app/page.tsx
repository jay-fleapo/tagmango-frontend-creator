'use client';

import { Data } from '../../view/data';
import { AddData } from '../../view/data/adddata';
import { CreateTask } from '../../view/tasks/createtask';
import { DataPage } from './pages/data';
import { TaskPage } from './pages/task';

export default function Home() {
  return (
    <>
      <CreateTask />
    </>
  );
}
