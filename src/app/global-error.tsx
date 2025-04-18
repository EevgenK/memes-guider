'use client';

import React from 'react';

export interface GlobalErrorProps {
  error: Error & { digest?: string };
}
const GlobalError = ({ error }: GlobalErrorProps) => {
  return (
    <html>
      <body>
        <h2>{`Something went wrong globally! ${error.message}`}</h2>
      </body>
    </html>
  );
};

export default GlobalError;
