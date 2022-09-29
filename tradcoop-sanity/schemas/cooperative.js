export default {
  name: "cooperative",
  title: "Cooperative",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Cooperative name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      valiidation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Cooperative",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Cooperative",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Cooperative",
    },
    {
      name: "address",
      type: "string",
      title: "Cooperative address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "products",
      type: "array",
      title: "Products",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
  ],
};
