import { getSchema } from "@globals/data";

const getRadii = async () => {
  const { schema } = await getSchema();

  const filteredService = schema.fields
    .filter((radius) => radius.name.length <= 3)
    .map((radius) => ({
      radius: radius.name,
      body: radius.type.fields
        .map((field) => field.name)
        .filter((name) => name !== "fieldGroupName"),
    }));

  const services = filteredService.reduce(
    (result, { radius, body }) => ({
      ...result,
      [radius]: `${radius} { ${body} }`,
    }),
    {}
  );

  return Object.values(services);
};

export { getRadii };
