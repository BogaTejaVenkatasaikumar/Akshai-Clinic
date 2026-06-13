export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: "men" | "women" | "skin" | "hair" | "bridal";
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "hair-styling" | "hair-wash" | "facial" | "interiors" | "products" | "menus";
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface OfferItem {
  id: string;
  title: string;
  discount: string;
  description: string;
  code: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
}
