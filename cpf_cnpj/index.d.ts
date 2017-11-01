declare module 'cpf_cnpj' {
  interface Document {
    format(document: string): string;
    generate(formatted?: boolean): string;
    isValid(document: string): boolean;
    strip(document: string): string;
  }

  interface CPF_CNPJ {
    CPF: Document;
    CNPJ: Document;
  }

  const cpf_cnpj: CPF_CNPJ;
  export = cpf_cnpj
}
