/* eslint-disable */
import * as types from "./graphql.js";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  mutation IncrementCounter($post_id: Int) {\n    incrementCounter(input: { post_id: $post_id }) {\n      viewCount\n    }\n  }\n":
    types.IncrementCounterDocument,
  "\n  query GetAvailableRadii {\n    availableRadiusItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n":
    types.GetAvailableRadiiDocument,
  "\n  query GetCarBodies {\n    carBodyItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n":
    types.GetCarBodiesDocument,
  "\n  query GetContacts {\n    contactItems {\n      nodes {\n        contactAddons {\n          address\n          email\n          linkFb\n          linkVk\n          telephone\n          workinghours\n          fragmentId\n        }\n      }\n    }\n  }\n":
    types.GetContactsDocument,
  "\n  query GetFragments {\n    fragments(first: 1000) {\n      nodes {\n        contentAddons {\n          title\n          content\n          fragmentId\n          highlightedtext\n        }\n      }\n    }\n  }\n":
    types.GetFragmentsDocument,
  "\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          fragmentId\n          title\n          content\n        }\n      }\n    }\n  }\n":
    types.GetNavigationDocument,
  "\n  query GetPosts {\n    posts {\n      nodes {\n        uri\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            mediaItemUrl\n            altText\n          }\n        }\n      }\n    }\n  }\n":
    types.GetPostsDocument,
  "\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n":
    types.GetPreviewDocument,
  "\n  query GetSchema {\n    __schema {\n      types {\n        name\n        fields {\n          name\n          type {\n            fields {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n":
    types.GetSchemaDocument,
  "\n  query GetUi {\n    uiItems {\n      nodes {\n        contentAddons {\n          image {\n            altText\n            sourceUrl\n          }\n          fragmentId\n        }\n      }\n    }\n  }\n":
    types.GetUiDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation IncrementCounter($post_id: Int) {\n    incrementCounter(input: { post_id: $post_id }) {\n      viewCount\n    }\n  }\n"
): (typeof documents)["\n  mutation IncrementCounter($post_id: Int) {\n    incrementCounter(input: { post_id: $post_id }) {\n      viewCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetAvailableRadii {\n    availableRadiusItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetAvailableRadii {\n    availableRadiusItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetCarBodies {\n    carBodyItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetCarBodies {\n    carBodyItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetContacts {\n    contactItems {\n      nodes {\n        contactAddons {\n          address\n          email\n          linkFb\n          linkVk\n          telephone\n          workinghours\n          fragmentId\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetContacts {\n    contactItems {\n      nodes {\n        contactAddons {\n          address\n          email\n          linkFb\n          linkVk\n          telephone\n          workinghours\n          fragmentId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetFragments {\n    fragments(first: 1000) {\n      nodes {\n        contentAddons {\n          title\n          content\n          fragmentId\n          highlightedtext\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetFragments {\n    fragments(first: 1000) {\n      nodes {\n        contentAddons {\n          title\n          content\n          fragmentId\n          highlightedtext\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          fragmentId\n          title\n          content\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          fragmentId\n          title\n          content\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetPosts {\n    posts {\n      nodes {\n        uri\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            mediaItemUrl\n            altText\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetPosts {\n    posts {\n      nodes {\n        uri\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            mediaItemUrl\n            altText\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n"
): (typeof documents)["\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetSchema {\n    __schema {\n      types {\n        name\n        fields {\n          name\n          type {\n            fields {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetSchema {\n    __schema {\n      types {\n        name\n        fields {\n          name\n          type {\n            fields {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetUi {\n    uiItems {\n      nodes {\n        contentAddons {\n          image {\n            altText\n            sourceUrl\n          }\n          fragmentId\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetUi {\n    uiItems {\n      nodes {\n        contentAddons {\n          image {\n            altText\n            sourceUrl\n          }\n          fragmentId\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

