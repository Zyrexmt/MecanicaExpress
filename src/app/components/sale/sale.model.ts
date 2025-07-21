export interface Purchase {
    proId?: number;
    compraQuantidade: number;
    compraPrecoVenda: number;
}

export interface Sale {
    vendaId?: number;
    vendaCodigo: string;
    vendaData: string;
    cliId: number;
    fpgId: number;
    vendaValorTotal: number;
    compras: Purchase[];
}
