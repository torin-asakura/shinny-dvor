/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  mutation IncrementCounter($post_id: Int) {\n    incrementCounter(input: { post_id: $post_id }) {\n      viewCount\n    }\n  }\n": types.IncrementCounterDocument,
    "\n  query GetAvailableRadii {\n    availableRadiusItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n": types.GetAvailableRadiiDocument,
    "\n  query GetBlogIndexPageSeo {\n    pageBy(uri: \"/blog\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n": types.GetBlogIndexPageSeoDocument,
    "\n  query GetPostBy($uri: String!) {\n    postBy(uri: $uri) {\n      postId\n      content\n      date\n      title\n      viewCount\n      featuredImage {\n        node {\n          altText\n          mediaItemUrl\n        }\n      }\n      contentAddons {\n        image {\n          altText\n          mediaItemUrl\n        }\n      }\n    }\n  }\n": types.GetPostByDocument,
    "\n  query GetSitePostPageSeo($uri: String!) {\n    postBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n": types.GetSitePostPageSeoDocument,
    "\n  query GetPosts {\n    posts {\n      nodes {\n        uri\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            mediaItemUrl\n            altText\n          }\n        }\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  query GetCarBodies {\n    carBodyItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n": types.GetCarBodiesDocument,
    "\n  query GetContacts {\n    contactItems {\n      nodes {\n        contactAddons {\n          address\n          email\n          linkFb\n          linkVk\n          telephone\n          workinghours\n          fragmentId\n        }\n      }\n    }\n  }\n": types.GetContactsDocument,
    "\n  query GetFragments {\n    fragments(first: 1000) {\n      nodes {\n        contentAddons {\n          title\n          content\n          fragmentId\n          highlightedtext\n        }\n      }\n    }\n  }\n": types.GetFragmentsDocument,
    "\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          fragmentId\n          title\n          content\n        }\n      }\n    }\n  }\n": types.GetNavigationDocument,
    "\n  query GetPageSeo($uri: String!) {\n    postBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n": types.GetPageSeoDocument,
    "\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n": types.GetPreviewDocument,
    "\n  query GetSchema {\n    __schema {\n      types {\n        name\n        fields {\n          name\n          type {\n            fields {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetSchemaDocument,
    "\n  query GetServiceBy($uri: String!) {\n    serviceBy(uri: $uri) {\n      servicesParams {\n        title\n        description\n        fragmentId\n        addon\n        variant\n        bodies\n        image {\n          altText\n          sourceUrl\n        }\n        workexamples {\n          firstexample {\n            title\n            image {\n              altText\n              sourceUrl\n            }\n          }\n          secondexample {\n            title\n            image {\n              altText\n              sourceUrl\n            }\n          }\n        }\n        additionalservice {\n          title\n          price\n        }\n      }\n    }\n  }\n": types.GetServiceByDocument,
    "\n  query GetServices {\n    services {\n      nodes {\n        uri\n        servicesParams {\n          title\n          description\n          fragmentId\n          addon\n          variant\n          averagePrice\n          image {\n            altText\n            sourceUrl\n          }\n          workexamples {\n            firstexample {\n              title\n              image {\n                altText\n                sourceUrl\n              }\n            }\n            secondexample {\n              title\n              image {\n                altText\n                sourceUrl\n              }\n            }\n          }\n          additionalservice {\n            title\n            price\n          }\n        }\n      }\n    }\n  }\n": types.GetServicesDocument,
    "\n  query GetSiteContactsPageSeo {\n    pageBy(uri: \"/contacts\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n": types.GetSiteContactsPageSeoDocument,
    "\n  query GetSiteIndexPageSeo {\n    pageBy(uri: \"/home\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n": types.GetSiteIndexPageSeoDocument,
    "\n  query GetSiteServicePageSeo($uri: String!) {\n    serviceBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n": types.GetSiteServicePageSeoDocument,
    "\n  query GetSiteServicesPageSeo {\n    pages(where: { name: \"services\" }) {\n      nodes {\n        seo {\n          metaDesc\n          title\n        }\n      }\n    }\n  }\n": types.GetSiteServicesPageSeoDocument,
    "\n  query GetUi {\n    uiItems {\n      nodes {\n        contentAddons {\n          image {\n            altText\n            sourceUrl\n          }\n          fragmentId\n        }\n      }\n    }\n  }\n": types.GetUiDocument,
    "\n  query GetWorkResults {\n    workResultItems {\n      nodes {\n        workResultParams {\n          fragmentId\n          time\n          price\n          description\n          photos {\n            firstPhoto {\n              sourceUrl\n            }\n            secondPhoto {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetWorkResultsDocument,
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
export function gql(source: "\n  mutation IncrementCounter($post_id: Int) {\n    incrementCounter(input: { post_id: $post_id }) {\n      viewCount\n    }\n  }\n"): (typeof documents)["\n  mutation IncrementCounter($post_id: Int) {\n    incrementCounter(input: { post_id: $post_id }) {\n      viewCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAvailableRadii {\n    availableRadiusItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAvailableRadii {\n    availableRadiusItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBlogIndexPageSeo {\n    pageBy(uri: \"/blog\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlogIndexPageSeo {\n    pageBy(uri: \"/blog\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPostBy($uri: String!) {\n    postBy(uri: $uri) {\n      postId\n      content\n      date\n      title\n      viewCount\n      featuredImage {\n        node {\n          altText\n          mediaItemUrl\n        }\n      }\n      contentAddons {\n        image {\n          altText\n          mediaItemUrl\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostBy($uri: String!) {\n    postBy(uri: $uri) {\n      postId\n      content\n      date\n      title\n      viewCount\n      featuredImage {\n        node {\n          altText\n          mediaItemUrl\n        }\n      }\n      contentAddons {\n        image {\n          altText\n          mediaItemUrl\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSitePostPageSeo($uri: String!) {\n    postBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSitePostPageSeo($uri: String!) {\n    postBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPosts {\n    posts {\n      nodes {\n        uri\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            mediaItemUrl\n            altText\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPosts {\n    posts {\n      nodes {\n        uri\n        title\n        date\n        excerpt\n        featuredImage {\n          node {\n            mediaItemUrl\n            altText\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCarBodies {\n    carBodyItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCarBodies {\n    carBodyItems {\n      nodes {\n        contentAddons {\n          title\n          fragmentId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContacts {\n    contactItems {\n      nodes {\n        contactAddons {\n          address\n          email\n          linkFb\n          linkVk\n          telephone\n          workinghours\n          fragmentId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContacts {\n    contactItems {\n      nodes {\n        contactAddons {\n          address\n          email\n          linkFb\n          linkVk\n          telephone\n          workinghours\n          fragmentId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetFragments {\n    fragments(first: 1000) {\n      nodes {\n        contentAddons {\n          title\n          content\n          fragmentId\n          highlightedtext\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFragments {\n    fragments(first: 1000) {\n      nodes {\n        contentAddons {\n          title\n          content\n          fragmentId\n          highlightedtext\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          fragmentId\n          title\n          content\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          fragmentId\n          title\n          content\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPageSeo($uri: String!) {\n    postBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPageSeo($uri: String!) {\n    postBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n"): (typeof documents)["\n  query GetPreview($uri: String!) {\n    mediaItemBy(uri: $uri) {\n      sourceUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSchema {\n    __schema {\n      types {\n        name\n        fields {\n          name\n          type {\n            fields {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSchema {\n    __schema {\n      types {\n        name\n        fields {\n          name\n          type {\n            fields {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetServiceBy($uri: String!) {\n    serviceBy(uri: $uri) {\n      servicesParams {\n        title\n        description\n        fragmentId\n        addon\n        variant\n        bodies\n        image {\n          altText\n          sourceUrl\n        }\n        workexamples {\n          firstexample {\n            title\n            image {\n              altText\n              sourceUrl\n            }\n          }\n          secondexample {\n            title\n            image {\n              altText\n              sourceUrl\n            }\n          }\n        }\n        additionalservice {\n          title\n          price\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetServiceBy($uri: String!) {\n    serviceBy(uri: $uri) {\n      servicesParams {\n        title\n        description\n        fragmentId\n        addon\n        variant\n        bodies\n        image {\n          altText\n          sourceUrl\n        }\n        workexamples {\n          firstexample {\n            title\n            image {\n              altText\n              sourceUrl\n            }\n          }\n          secondexample {\n            title\n            image {\n              altText\n              sourceUrl\n            }\n          }\n        }\n        additionalservice {\n          title\n          price\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetServices {\n    services {\n      nodes {\n        uri\n        servicesParams {\n          title\n          description\n          fragmentId\n          addon\n          variant\n          averagePrice\n          image {\n            altText\n            sourceUrl\n          }\n          workexamples {\n            firstexample {\n              title\n              image {\n                altText\n                sourceUrl\n              }\n            }\n            secondexample {\n              title\n              image {\n                altText\n                sourceUrl\n              }\n            }\n          }\n          additionalservice {\n            title\n            price\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetServices {\n    services {\n      nodes {\n        uri\n        servicesParams {\n          title\n          description\n          fragmentId\n          addon\n          variant\n          averagePrice\n          image {\n            altText\n            sourceUrl\n          }\n          workexamples {\n            firstexample {\n              title\n              image {\n                altText\n                sourceUrl\n              }\n            }\n            secondexample {\n              title\n              image {\n                altText\n                sourceUrl\n              }\n            }\n          }\n          additionalservice {\n            title\n            price\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSiteContactsPageSeo {\n    pageBy(uri: \"/contacts\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSiteContactsPageSeo {\n    pageBy(uri: \"/contacts\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSiteIndexPageSeo {\n    pageBy(uri: \"/home\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSiteIndexPageSeo {\n    pageBy(uri: \"/home\") {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSiteServicePageSeo($uri: String!) {\n    serviceBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSiteServicePageSeo($uri: String!) {\n    serviceBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSiteServicesPageSeo {\n    pages(where: { name: \"services\" }) {\n      nodes {\n        seo {\n          metaDesc\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSiteServicesPageSeo {\n    pages(where: { name: \"services\" }) {\n      nodes {\n        seo {\n          metaDesc\n          title\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUi {\n    uiItems {\n      nodes {\n        contentAddons {\n          image {\n            altText\n            sourceUrl\n          }\n          fragmentId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUi {\n    uiItems {\n      nodes {\n        contentAddons {\n          image {\n            altText\n            sourceUrl\n          }\n          fragmentId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetWorkResults {\n    workResultItems {\n      nodes {\n        workResultParams {\n          fragmentId\n          time\n          price\n          description\n          photos {\n            firstPhoto {\n              sourceUrl\n            }\n            secondPhoto {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWorkResults {\n    workResultItems {\n      nodes {\n        workResultParams {\n          fragmentId\n          time\n          price\n          description\n          photos {\n            firstPhoto {\n              sourceUrl\n            }\n            secondPhoto {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;