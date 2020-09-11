import { IProductInfo, IProductConfig } from '../interfaces';

export const productInfo: IProductInfo = {
  brandImage: 'Brand',
  name: 'Baby Shampoo 100ml',
  id: '0381370037248',
  description1: 'NO MORE TEARS formula is as gentle to the eyes as pure water.Will not irritate baby\'s delicate skin and eyes during normal use. Rinses easily, leaving hair soft, shiny, manageable and cleanClinically proven to be gentle and mild. Soap-free, alcohol-free, hypoallergenic and allergy- and dermatologist-tested.cheaper by the case (case of 12) - get it for wholesale price',
  description2: 'J&J Baby Shampoo',
  hyperlinks: ['Product information at J&J', 'Buy online', 'Get special coupons and discounts by authenticating'],
  provenanceDetails: {
    lot: 'ABD122',
    manfDate: 'Tue Dec 01 2019 19:13:11 GMT+0400 (Armenia Standard Time)',
    expDate: 'Tue Jan 01 2026 19:13:11 GMT+0400 (Armenia Standard Time)',
    country: 'USA'
  },
  socialLinks: ['facebook', 'twitter', 'instagram']
};

export const productConfig: IProductConfig = {
  showBrandImage: true,
  showProductName: true,
  showProductImage: true,
  showProductDesc: true,
  showProvenance: true,
  showAppStoreInfo: true,
  showUrls: true,
  showSocialIcons: true,
};
