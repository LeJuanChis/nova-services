export interface ServiceFeature {
  title: string;
  description: string;
}

// Modelo que representa un servicio con sus detalles.
export interface ServiceItem {
  id: number;
  slug: string;
  category: string;
  badge: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  priceSuffix: string;
  imageUrl: string;
  imageAlt: string;
  detailMainImage: string;
  detailSideTopImage: string;
  detailSideBottomImage: string;
  featured?: boolean;
  featuredLayout?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  features: ServiceFeature[];
}
