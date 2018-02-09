interface RgbHex {
  (rgb: string): string;
  (red: number, green: number, blue: number, alpha?: string): string;
  (red: number, green: number, blue: number, alpha?: number): string;
}

declare const rgbHex: RgbHex;

export = rgbHex;
export as namespace rgbHex;
