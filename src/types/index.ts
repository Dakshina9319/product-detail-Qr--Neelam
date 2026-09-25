export interface ProvenanceNode {
  id: number;
  label: string;
  name: string;
  coordinates: string;
  subtext: string;
  description: string;
  colorScheme: 'indigo' | 'teal' | 'ochre' | 'green';
  lat: number;
  lng: number;
  svgPos: { x: number; y: number };
}

export interface LifecycleStage {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  highlight?: boolean;
}

export interface SareeCreation {
  id: string;
  title: string;
  tag: string;
  loomInfo: string;
  description: string;
  price: number;
  priceFormatted: string;
  image: string;
  alt: string;
}

export interface MacroDetail {
  id: string;
  title: string;
  image: string;
  alt: string;
  fullImage: string;
  caption: string;
}

export interface GratitudeNote {
  id: string;
  author: string;
  location: string;
  text: string;
  timestamp: string;
  sareeRef: string;
}
