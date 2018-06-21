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

  type MapType = string | number;
  type CSSPropertiesMap = CSS.Properties<MapType>;

  type CSSRecord<K extends keyof CSSPropertiesMap, T> = Record<K, Pick<CSSPropertiesMap, K>[K]> | Record<K, T>;

  type EnhancedProperties = (
    CSSRecord<'animation', Array<any[]>> &
    CSSRecord<
      'backgroundSize' | 'backgroundPosition' | 'border' | 'borderBottom' | 'borderLeft' |
      'borderTop' | 'borderRight' | 'boxShadow' | 'flex' | 'margin' | 'padding' | 'outline' |
      'transformOrigin' | 'transform' | 'transition',
      any[]
    >
  );

  type FlattenEnhancedProperties = {
    [key in keyof EnhancedProperties]?: EnhancedProperties[key];
  };

  export interface CSSProperties extends Pick<CSSPropertiesMap, Exclude<keyof CSSPropertiesMap, keyof FlattenEnhancedProperties>>, FlattenEnhancedProperties {
    [key: string]: any;
  }

  export type StaticStyles<K extends string = string> = Record<K, CSSProperties>;
  export type ThemedStyles<T extends object = {}, K extends string = string> = (theme: T) => StaticStyles<K>;

  interface ComponentWithStyles<InjectedProps, C extends string> {
    <P extends InjectedProps>(
      component: React.ComponentType<P & InjectSheetProps<C>>
    ): React.ComponentClass<P & InjectSheetProps<C>>;
  }

  export interface InjectSheetOptions {
    inject?: Array<'classes' | 'theme' | 'sheet'>
    theming?: Theming;
  }

  export default function injectSheet<P, C extends string>(styles: StaticStyles | ThemedStyles, options?: InjectSheetOptions): ComponentWithStyles<P, C>;
}
