export interface Client {
   cliId?: number; // opcional, pois pode ser null ao cadastrar
  cliCpf: string;
  cliNome: string;

  endRua: string;
  endNumero: string;
  endCidade: string;
  endCep: string;
  endEstado: string;

  conCelular: string;
  conTelefoneComercial: string;
  conEmail: string;
}
