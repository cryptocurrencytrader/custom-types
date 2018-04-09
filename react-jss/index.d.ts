import * as React from 'react';
import * as CSS from 'csstype';
import { Omit } from 'type-zoo';

interface JSS {
  use: (...plugins: Array<() => any>) => void;
}

export const jss: JSS;

export interface InjectSheetProps<C extends string> {
  classes: { [key in C]: string; };
}

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

export interface CSSProperties extends Omit<CSSPropertiesMap, keyof FlattenEnhancedProperties>, FlattenEnhancedProperties {
  [key: string]: any;
}

export type Styles<K extends string = string> = {
  [key in K]: CSSProperties;
}

type ComponentConstructor<P> = React.ComponentClass<P> | React.SFC<P>;

interface ComponentWithStyles<InjectedProps, C extends string> {
  <P extends InjectedProps>(
    component: ComponentConstructor<P & InjectSheetProps<C>>
  ): React.ComponentClass<P & InjectSheetProps<C>>;
}

export default function injectSheet<P, C extends string>(styles: Styles): ComponentWithStyles<P, C>;
