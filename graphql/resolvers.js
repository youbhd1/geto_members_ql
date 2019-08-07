import { getAllmembers, getFindMembersName} from "./db";

// GraphQL: Resolvers
const RESOLVERS =  {
    Query: {
        allMembers: (_, { }) => getAllmembers(),
        //membersName: (_, { obj, args }) => getFindMembersName(obj, args),
    }
}

// Exports
export default RESOLVERS;