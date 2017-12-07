/// <reference types="react" />

declare module 'react-text-mask' {
  import * as React from 'react';

  namespace TextMask {
    export type SupportedTypes = 'text' | 'tel' | 'url' | 'password' | 'search';
    export type Mask = (string | RegExp)[];
  }

  export type Mask = TextMask.Mask;
  export type SupportedTypes = TextMask.SupportedTypes;

  type PipeFactory = (conformedValue?: string, config?: Config) => false | string | object;

  export interface Config {
    currentCaretPosition: number;
    guide: boolean;
    keepCharPositions: boolean;
    pipe: PipeFactory,
    placeholder: string;
    placeholderChar: string;
    previousConformedValue: string;
    rawValue: string;
  }

  export type MaskHandlerFn = (rawValue: string) => Mask;

  export interface TextMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
    guide?: boolean;
    keepCharPositions?: boolean;
    mask: Mask | MaskHandlerFn;
    pipe?: PipeFactory;
    placeholderChar?: string;
    showMask?: boolean;
    type?: SupportedTypes;
  }

  const ReactTextMask: React.ComponentClass<TextMaskProps>;
  export default ReactTextMask;
}
