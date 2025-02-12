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