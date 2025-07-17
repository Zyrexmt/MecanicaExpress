export interface Product {
    proId?: number; // pode ser opcional, pois no front normalmente ainda não tem id
  proNome: string;
  proDescricao: string;
  proPrecoCusto: number;       // BigDecimal vira number no TS
  proPrecoVenda: number;
  proQuantidadeEstoque: number;
  proCategoria: string;
  proCodigoBarras: string;
  proMarca: string;
  proUnidadeMedida: string;
  proAtivo: string;            // pode ser 'Ativo' / 'Inativo' conforme seu backend
  proDataCadastro?: string;   // ISO string, LocalDateTime vira string ISO no JSON
  proDataAtualizacao?: string;
  forId: number;
}
