declare module 'hex-to-rgb' {
  namespace HexToRgb {}
  type HexToRgb = (hex: string) => [number, number, number];

  const hexToRgb: HexToRgb;
  export = hexToRgb;
}
