/* eslint-disable */
import * as types from './graphql';
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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment ContactFragment on ContactResponse {\n    id\n    fullName\n    email\n    companyName\n    message\n    businessPhone\n  }\n": typeof types.ContactFragmentFragmentDoc,
    "\n\n\nquery GetContactById($id: ID!){\n    getContactById(id: $id){\n        ...ContactFragment\n    }\n}\n": typeof types.GetContactByIdDocument,
    "\nquery GetAllContact($options: ContactListOptions ){\n    getAllContact(options: $options){\n        items{\n            fullName\n            id\n            email\n            companyName\n            message\n            businessPhone\n        }\n        totalItems\n    }\n}": typeof types.GetAllContactDocument,
};
const documents: Documents = {
    "\n  fragment ContactFragment on ContactResponse {\n    id\n    fullName\n    email\n    companyName\n    message\n    businessPhone\n  }\n": types.ContactFragmentFragmentDoc,
    "\n\n\nquery GetContactById($id: ID!){\n    getContactById(id: $id){\n        ...ContactFragment\n    }\n}\n": types.GetContactByIdDocument,
    "\nquery GetAllContact($options: ContactListOptions ){\n    getAllContact(options: $options){\n        items{\n            fullName\n            id\n            email\n            companyName\n            message\n            businessPhone\n        }\n        totalItems\n    }\n}": types.GetAllContactDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContactFragment on ContactResponse {\n    id\n    fullName\n    email\n    companyName\n    message\n    businessPhone\n  }\n"): (typeof documents)["\n  fragment ContactFragment on ContactResponse {\n    id\n    fullName\n    email\n    companyName\n    message\n    businessPhone\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\n\nquery GetContactById($id: ID!){\n    getContactById(id: $id){\n        ...ContactFragment\n    }\n}\n"): (typeof documents)["\n\n\nquery GetContactById($id: ID!){\n    getContactById(id: $id){\n        ...ContactFragment\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllContact($options: ContactListOptions ){\n    getAllContact(options: $options){\n        items{\n            fullName\n            id\n            email\n            companyName\n            message\n            businessPhone\n        }\n        totalItems\n    }\n}"): (typeof documents)["\nquery GetAllContact($options: ContactListOptions ){\n    getAllContact(options: $options){\n        items{\n            fullName\n            id\n            email\n            companyName\n            message\n            businessPhone\n        }\n        totalItems\n    }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;