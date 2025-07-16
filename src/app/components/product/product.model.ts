export interface Product {
    proId?: number;
  proNome: string;
  proDescricao: string;
  proPrecoCusto: number;
  proPrecoVenda: number;
  proQuantidadeEstoque: number;
  proCategoria: string;
  proCodigoBarras: string;
  proMarca: string;
  proUnidadeMedida: string;
  proAtivo: 'Ativo' | 'Inativo';
  proDataCadastro: string;         // ISO string format ex: '2025-07-16T15:00:00'
  proDataAtualizacao: string;     // idem
  proFornecedor: number;
}
