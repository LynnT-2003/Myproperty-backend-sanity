"use client";
import React, { useEffect, useState } from "react";
import { fetchAllProperties } from "@/sanity/services/PropertyServices";
import { Property } from "@/sanity/types";

const Home = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchAllProperties();
      setProperties(data);
    };

    getProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>{property.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
