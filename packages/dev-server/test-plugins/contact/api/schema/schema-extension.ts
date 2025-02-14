import gql from 'graphql-tag';

const INSTANCE_EXS = `
    input CreateContactInput {
        email: String
        fullName: String
        companyName: String
        message: String
        businessPhone: String
    }
    type ContactResponse {
        id: ID!
        fullName: String!
        email: String!
        companyName: String
        message: String
        businessPhone: String
    }
    type ContactDeleteResponse {
        result: DeletionResult,
        message: String
    }
    
`

const RESTFULL_METHOD = {
    ADMIN: `
    extend type Mutation {
        createContact(input: CreateContactInput): ContactResponse
        deleteContactById(id: ID!): Boolean
        deleteContacts(ids: [ID!]!): [ContactDeleteResponse!]!
    }
    extend type Query {
        getAllContact(options: ContactListOptions): ContactList!
        getContactById(id: ID!): ContactResponse
        getContactByEmail(email: String!): [ContactResponse]
    }`,
    SHOP: `
    extend type Mutation {
        createContact(input: CreateContactInput): ContactResponse
    }
    `
}
const LIST = `
    input ContactListOptions
    type Contact implements Node {
        id: ID!
        fullName: String!
        email: String!
        companyName: String
        message: String
        businessPhone: String
    }
    
    type ContactList implements PaginatedList {
        items: [Contact!]!
        totalItems: Int!
    }
`
export const adminApiExtensions = gql`
    ${INSTANCE_EXS}
    ${LIST}
    ${RESTFULL_METHOD.ADMIN}
`;

export const shopApiExtensions = gql`
    ${INSTANCE_EXS}
    ${RESTFULL_METHOD.SHOP}
`;
