// Imports: GraphQL
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`
    type Query {
        allMembers: [Member]
        membersName(name:String): [Member]
    }

    type Member {
        seq: Int
        id: String
        profile_image: String
        name: String
        money: Float
        friend:[String]
        mygame:[String]
        preference_genres:[String]
        location:String
        state:String
        created:String
        updated:String
    }
`;

// Exports
export default TYPEDEFS;