export interface IProductInfo {
  brandImage: string;
  name: string;
  id: string;
  description1: string;
  description2: string;
  hyperlinks: Array<string>;
  provenanceDetails: IItemDetails;
}

export interface IProductConfig {
  showBrandImage: boolean;
  showProductName: boolean;
  showProductImage: boolean;
  showProductDesc: boolean;
  showProvenance: boolean;
  showAppStoreInfo: boolean;
}

export interface IItemDetails {
  lot: string;
  manfDate: string;
  expDate: string;
  country: string;
}
