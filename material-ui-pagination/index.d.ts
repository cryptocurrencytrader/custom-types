/// <reference types="react" />

declare module 'material-ui-pagination' {
  import * as React from 'react';

  export interface PaginationProps {
    current: number;
    display: number;
    onChange(value: number): void;
    styleButton?: React.CSSProperties;
    styleFirstPageLink?: React.CSSProperties;
    styleLastPageLink?: React.CSSProperties;
    stylePrimary?: React.CSSProperties;
    styleRoot?: React.CSSProperties;
    total: number;
  }

  export default class Pagination extends React.Component<PaginationProps> {}
}
