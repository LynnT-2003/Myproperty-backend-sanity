// types/property.ts

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
  facilities: Facility[];
  tags: string[];
  propertyHero: Image;
  photos: Image[];
  brochure: File;
  createdAt: string; // ISO 8601 date string
};

export type Facility = {
  facilityType: string;
  facilityName: string;
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

export type File = {
  _type: "file";
  asset: {
    _ref: string; // Reference to file asset ID
    _type: "reference";
  };
};
