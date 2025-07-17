export interface Payment {

    fpgId?: number;
    fpgTipo: string;
    fpgDescricao: string;
    fpgPermiteParcelamento: boolean;
    fpgNumMaxParcelas: number;
    fpgTaxaAdicional: number;
}
