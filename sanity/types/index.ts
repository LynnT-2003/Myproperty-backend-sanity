// types/property.ts
import { Image as SanityImage } from "sanity";

export type Property = {
  _id: string; // Sanity document ID
  //   _type: "property"; // Sanity document type
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  minPrice: number;
  maxPrice: number;
  latitude: number;
  longitude: number;
  facilities: Facility[];
  tags: string[];
  propertyHero: Image;
  photos: Image[];
  brochure: File;
  createdAt: string; // ISO 8601 date string
};

export type Facility = {
  facilityType: string;
  description: string;
  photos: Image[];
};

export type Image = {
  _type: "image";
  asset: {
    _ref: string; // Reference to image asset ID
    _type: "reference";
  };
  hotspot?: {
    _type: "hotspot";
    x: number;
    y: number;
    height: number;
    width: number;
  };
};

export interface Listing {
  _id: string;
  property: {
    _ref: string;
    _type: string;
  };
  listingName: string;
  description: string;
  price: number;
  minPrice: number;
  maxPrice: number;
  minimumContractInMonth: number;
  floor: number;
  size: number;
  bedroom: number;
  bathroom: number;
  furniture: "fully-fitted" | "fully-furnished";
  status: "ready-to-move-in" | "finishing-2026";
  listingType: "sale" | "rent";
  facingDirection: "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";
  createdAt: string; // ISO date string
  listingHero: SanityImage;
  listingPhoto: SanityImage[];
  floorPlan: SanityImage;
  statusActive: "active" | "inactive";
}

export type File = {
  _type: "file";
  asset: {
    _ref: string; // Reference to file asset ID
    _type: "reference";
  };
};
