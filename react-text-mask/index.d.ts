/// <reference types="react" />

import * as React from 'react';

declare namespace TextMask {
  interface Config {
    currentCaretPosition: number;
    guide: boolean;
    keepCharPositions: boolean;
    pipe: TextMask.PipeHandlerFn,
    placeholder: string;
    placeholderChar: string;
    previousConformedValue: string;
    rawValue: string;
  }

  export type Mask = (string | RegExp)[];

  export type PipeHandlerFn = (conformedValue?: string, config?: Config) => false | string | object;

  export type SupportedTypes = 'text' | 'tel' | 'url' | 'password' | 'search';
}

export type Mask = TextMask.Mask;

export type PipeHandlerFn = TextMask.PipeHandlerFn;

export type SupportedTypes = TextMask.SupportedTypes;

export type MaskHandlerFn = (rawValue: string) => Mask;

export interface TextMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
  guide?: boolean;
  keepCharPositions?: boolean;
  mask: Mask | MaskHandlerFn;
  pipe?: TextMask.PipeHandlerFn;
  placeholderChar?: string;
  showMask?: boolean;
  type?: SupportedTypes;
}

declare const ReactTextMask: React.ComponentClass<TextMaskProps>;
export default ReactTextMask;
