import React from 'react';
export interface PageTitle {
  text: string;
}
const PageTitle = ({ text }: PageTitle) => {
  return (
    <h1 className="text-2xl uppercase font-bold my-4 text-center text-secondary">
      {text}
    </h1>
  );
};

export default PageTitle;
