interface HexToRgb {
  (hex: string): [number, number, number];
}

declare const hexToRgb: HexToRgb;

export = hexToRgb;
export as namespace hexToRgb;
