'use client';

import { Button } from '@heroui/react';
import React from 'react';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}
const ErrorComponent = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div className="justify-center flex-col gap-8">
      <h1 className="text-primary ">{`Something went wrong. ${error.message}`}</h1>
      <Button color="primary" onPress={() => reset()}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorComponent;
