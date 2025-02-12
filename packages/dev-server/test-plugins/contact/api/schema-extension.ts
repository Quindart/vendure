import gql from 'graphql-tag';
export const adminApiExtensions = gql`
    
    input ContactListOptions

    input CreateContactInput {
    email: String
    fullName: String
    companyName: String
    message: String
    businessPhone: String
    }
    
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

    type ContactResponse {
        id: ID!
        fullName: String!
        email: String!
        companyName: String
        message: String
        businessPhone: String
    }
    extend type Mutation {
        createContact(input: CreateContactInput): ContactResponse
        deleteContactById(id: ID!): Boolean
    }
    extend type Query {
        getAllContact(options: ContactListOptions): ContactList!
        getContactById(id: ID!): ContactResponse
        getContactByEmail(email: String!): [ContactResponse]
    }
`;

export const shopApiExtensions = gql`
    
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
    
    extend type Mutation {
        createContact(input: CreateContactInput): ContactResponse
    }
  
`;
