interface Document {
  format(document: string): string;
  generate(formatted?: boolean): string;
  isValid(document: string): boolean;
  strip(document: string): string;
}

declare const cpf_cnpj: { CPF: Document; CNPJ: Document; };

export = cpf_cnpj
export as namespace cpf_cnpj;
