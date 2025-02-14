import gql from 'graphql-tag';

export const GET_CONTACT = gql`
query GetAllContact($options: ContactListOptions ){
    getAllContact(options: $options){
        items{
            fullName
            id
            email
            companyName
            message
            businessPhone
        }
        totalItems
    }
}`


export const DELETE_CONTACT = gql`
mutation DeleteContacts($ids: [ID!]!) {
        deleteContacts(ids: $ids) {
            result
            message
        }
    }
`;
