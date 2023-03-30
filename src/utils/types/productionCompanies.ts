export interface ProductionCompaies {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export type ProductionCompaniesList = Array<ProductionCompaies>;
