import { headers } from 'next/headers';
import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentProps) {
  console.log('Server component Copy');
  const headerList = headers();
  headerList.forEach((value, key) => {
    console.log(`${key} ==> ${value}`);
  });
  return (
    <div>
      <span>Server component Copy</span>
      {children}
    </div>
  );
}
