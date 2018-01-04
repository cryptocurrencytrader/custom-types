/// <reference types="react"/>

import * as React from 'react';

interface JSS {
  use: (...plugins: Array<() => any>) => void;
}

export const jss: JSS;

export interface InjectSheetProps<C extends string> {
  classes: { [key in C]: string; };
}

type ComponentConstructor<P> = React.ComponentClass<P> | React.SFC<P>;

interface ComponentWithStyles<InjectedProps, C extends string> {
  <P extends InjectedProps>(
    component: ComponentConstructor<P & InjectSheetProps<C>>
  ): React.ComponentClass<P & InjectSheetProps<C>>;
}

export default function injectSheet<P, C extends string>(
  styles: { [key: string]: React.CSSProperties }
): ComponentWithStyles<P, C>;
