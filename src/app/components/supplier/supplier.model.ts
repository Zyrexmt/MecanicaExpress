export interface Supplier {
    forId?: number; // opcional, pois pode ser null ao cadastrar
  forCnpj: string;
  forNomeFantasia: string;
  forRazaoSocial: string;

  endRua: string;
  endNumero: string;
  endCidade: string;
  endCep: string;
  endEstado: string;

  conCelular: string;
  conTelefoneComercial: string;
  conEmail: string;
}