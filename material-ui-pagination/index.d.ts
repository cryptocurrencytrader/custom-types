/// <reference types="react" />

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

declare const Pagination: React.ComponentClass<PaginationProps>;
export default Pagination;
