import { defineType, defineField } from "sanity";

export default defineType({
  name: "listing",
  title: "Listing",
  type: "document",
  fields: [
    defineField({
      name: "property",
      title: "Property",
      type: "reference",
      to: [{ type: "property" }],
    }),
    defineField({
      name: "listingName",
      title: "Listing Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "minPrice",
      title: "MinPrice",
      type: "number",
    }),
    defineField({
      name: "maxPrice",
      title: "MaxPrice",
      type: "number",
    }),
    defineField({
      name: "minimumContractInMonth",
      title: "Minimum Contract In Month",
      type: "number",
    }),
    defineField({
      name: "floor",
      title: "Floor",
      type: "number",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "number",
    }),
    defineField({
      name: "bedroom",
      title: "Bedroom",
      type: "number",
    }),
    defineField({
      name: "bathroom",
      title: "Bathroom",
      type: "number",
    }),
    defineField({
      name: "furniture",
      title: "Furniture",
      type: "string",
      options: {
        list: [
          { title: "Fully-fitted", value: "fully-fitted" },
          { title: "Fully furnished", value: "fully-furnished" },
        ],
      },
    }),
    defineField({
      name: "listingType",
      title: "Listing Type",
      type: "string",
      options: {
        list: [
          { title: "Sale", value: "sale" },
          { title: "Rent", value: "rent" },
        ],
      },
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    }),
    defineField({
      name: "listingHero",
      title: "Listing Hero",
      type: "image",
      options: {
        hotspot: true, // Allows selection of a hotspot within the image
      },
    }),
    defineField({
      name: "listingPhoto",
      title: "listingPhoto",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "floorPlan",
      title: "Floor Plan",
      type: "image",
      options: {
        hotspot: true, // Allows selection of a hotspot within the image
      },
    }),
    defineField({
      name: "statusActive",
      title: "Status Active",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Inactive", value: "inactive" },
        ],
      },
    }),
  ],
});
