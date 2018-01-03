declare module 'hex-rgb' {
  interface Options {
    format?: 'array';
  }

  namespace HexRgb {}
  type HexRgb = (hex: string, options?: Options) => void;

  const hexRgb: HexRgb;
  export = hexRgb;
}
