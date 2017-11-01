/// <reference types="react" />

declare module 'react-display-name' {
  import * as React from 'react';
  export default function getDisplayName(WrappedComponent: React.ComponentClass | React.SFC): string;
}
