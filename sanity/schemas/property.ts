// schemas/property.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "minPrice",
      title: "Min Price",
      type: "number",
    }),
    defineField({
      name: "maxPrice",
      title: "Max Price",
      type: "number",
    }),
    defineField({
      name: "latitude",
      title: "Latitude",
      type: "number",
    }),
    defineField({
      name: "longitude",
      title: "Longitude",
      type: "number",
    }),
    defineField({
      name: "facilities",
      type: "array",
      title: "Facilities",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "facilityType",
              type: "string",
              title: "Facility Type",
            },
            {
              name: "description",
              type: "text",
              title: "Facility Description",
            },
            {
              name: "photos",
              title: "Photos",
              type: "array",
              of: [{ type: "image" }],
              options: {
                layout: "grid",
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "propertyHero",
      title: "Property Hero",
      type: "image",
      options: {
        hotspot: true, // Allows selection of a hotspot within the image
      },
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "brochure",
      title: "Brochure",
      type: "file",
      options: {
        accept: ".pdf", // Specify the allowed file format(s)
      },
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    }),
  ],
});
