import gql from "graphql-tag"
export const CREATE_CONTACT = gql`
mutation CreateContact($input: CreateContactInput) {
        createContact(input: $input) {
           fullName
            id
            email
            companyName
            message
            businessPhone
        }
    }
`;
