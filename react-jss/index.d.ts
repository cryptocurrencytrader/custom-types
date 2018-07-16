declare module 'react-jss' {
  import * as React from 'react';
  import * as CSS from 'csstype';

  interface JSS {
    use: (...plugins: Array<() => any>) => void;
  }

  export const jss: JSS;

  export interface InjectSheetProps<C extends string> {
    classes: Record<C, string>;
  }

  export type ThemeProvider = React.ComponentType<{ theme: object | (() => object) }>;
  export const ThemeProvider: ThemeProvider;

  export interface Theming {
    ThemeProvider: ThemeProvider;
  }

  export function createTheming(namespace: string): Theming;

  export type PropertiesType = string | number;
  export type CSSProperties = CSS.Properties<PropertiesType>;

  export type ExtendsCSSProperties<K extends keyof CSSProperties, T> = Record<K, Pick<CSSProperties, K>[K]> | Record<K, T>;

  export type EnhancedCSSProperties = Partial<(
    ExtendsCSSProperties<'animation', Array<any[]>> &
    ExtendsCSSProperties<
      'backgroundSize' | 'backgroundPosition' | 'border' | 'borderBottom' | 'borderLeft' |
      'borderTop' | 'borderRight' | 'boxShadow' | 'flex' | 'margin' | 'padding' | 'outline' |
      'transformOrigin' | 'transform' | 'transition',
      any[]
    >
  )>;

  export type JSSProperties = (
    Pick<CSSProperties, Exclude<keyof CSSProperties, keyof EnhancedCSSProperties>> &
    EnhancedCSSProperties
  );

  export type ComponentCSSProperties<P extends object = {}> = {
    [key in keyof JSSProperties]?: JSSProperties[key] | ((props: P) => JSSProperties[key]);
  } & {
    [key: string]: any;
  };

  export type StaticStyles<K extends string = string, P extends object = {}> = Record<K,
    ComponentCSSProperties<P> | ((props: P) => ComponentCSSProperties<P>)
  >;

  export type ThemedStyles<T extends object = {}, K extends string = string, P extends object = {}> = (theme: T) => StaticStyles<K, P>;

  interface ComponentWithStyles<InjectedProps, C extends string> {
    <P extends InjectedProps>(
      component: React.ComponentType<P & InjectSheetProps<C>>
    ): React.ComponentClass<P & InjectSheetProps<C>>;
  }

  export interface InjectSheetOptions {
    inject?: Array<'classes' | 'theme' | 'sheet'>
    theming?: Theming;
  }

  export default function injectSheet<P extends object, C extends string>(
    styles: StaticStyles<C, P> | ThemedStyles<{}, C, P>,
    options?: InjectSheetOptions,
  ): ComponentWithStyles<P, C>;
}
