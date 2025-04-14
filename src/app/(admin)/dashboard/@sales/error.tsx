'use client';

import React from 'react';
import { ErrorComponentProps } from '../error';

export interface ErrorComponentPage {
  error: Error;
}

export default function ErrorComponent({}: ErrorComponentProps) {
  return <div>Unexpected error inside slot sales</div>;
}
