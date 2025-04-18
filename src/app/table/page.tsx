import React from 'react';

import PageTitle from '../components/PageTitle';
import MemesTable from '../components/MemesTable';

const Page = () => {
  return (
    <main className="px-2">
      <PageTitle text="memes table" />

      <MemesTable />
    </main>
  );
};

export default Page;
