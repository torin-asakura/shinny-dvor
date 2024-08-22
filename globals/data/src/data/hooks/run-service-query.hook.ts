import { gql } from "@apollo/client";
import { getRadii } from "@globals/data";
import { getClient } from "@globals/data";

const runServiceQuery = async (uri) => {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
        query GetServiceBy($uri: String!) {
            serviceBy(uri: $uri) {
                servicesParams {
                    title
                    description
                    fragmentId
                    addon
                    variant
                    bodies
                    image {
                        altText
                        sourceUrl
                    }
                    workexamples {
                        firstexample {
                            title
                            image {
                                altText
                                sourceUrl
                            }
                        }
                        secondexample {
                            title
                            image {
                                altText
                                sourceUrl
                            }
                        }
                    }
                    price {
                        ${await getRadii()}
                    }
                    additionalservice {
                        title
                        price
                    }
                }
            }
        }
    `,
    variables: { uri },
  });

  if (data) {
    return {
      serviceBy: data.serviceBy,
    };
  }

  return { serviceBy: [] };
};

export { runServiceQuery };
