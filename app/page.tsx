"use client";
import React, { useEffect, useState } from "react";
import { fetchAllProperties } from "@/sanity/services/PropertyServices";
import { Listing, Property } from "@/sanity/types";
import { fetchAllListings } from "@/sanity/services/ListingServices";
import { urlForImage } from "@/sanity/lib/image";

const Home = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchAllProperties();
      setProperties(data);
    };

    const getListings = async () => {
      const data = await fetchAllListings();
      setListings(data);
    };

    getProperties();
    getListings();
  }, []);

  return (
    <div>
      <h1 className="underline text-xl pb-2">Properties</h1>
      <ul>
        {properties.map((property) => (
          <div key={property._id} className="pb-4">
            <p>{property._id}</p>
            <p>
              {property.title}: {property.description}
            </p>
          </div>
        ))}
      </ul>
      <br />
      <h1 className="underline text-xl pb-2">Listings</h1>
      <ul>
        {listings.map((listing) => (
          <div key={listing._id} className="pb-4">
            <p>
              {listing.listingName} - {listing.description}
            </p>
            <img src={urlForImage(listing.listingHero)} alt="image" />
            <p>{listing.property._ref}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
