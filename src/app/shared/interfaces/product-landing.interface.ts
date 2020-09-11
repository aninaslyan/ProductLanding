export interface IProductInfo {
  brandImage: string;
  name: string;
  id: string;
  description1: string;
  description2: string;
  hyperlinks: Array<string>;
  provenanceDetails: IItemDetails;
  socialLinks: Array<socialLink>;
}

export interface IProductConfig {
  showBrandImage: boolean;
  showProductName: boolean;
  showProductImage: boolean;
  showProductDesc: boolean;
  showProvenance: boolean;
  showAppStoreInfo: boolean;
  showUrls: boolean;
  showSocialIcons: boolean;
}

export interface IItemDetails {
  lot: string;
  manfDate: string;
  expDate: string;
  country: string;
}

export type socialLink = 'facebook' | 'twitter' | 'instagram';
