import gql from "graphql-tag"

export const CONTACT_FRAGMENT = gql`
  fragment ContactFragment on ContactResponse {
    id
    fullName
    email
    companyName
    message
    businessPhone
  }
`;

export const GET_CONTACt_BY_ID = gql`
${CONTACT_FRAGMENT}

query GetContactById($id: ID!){
    getContactById(id: $id){
        ...ContactFragment
    }
}
`