import React from 'react';
import MemeList from '../components/MemesList';
import PageTitle from '../components/PageTitle';

const Page = () => {
  return (
    <main className="px-2">
      <PageTitle text="memes list" />
      <MemeList />
    </main>
  );
};

export default Page;
