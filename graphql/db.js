// Imports: Axios
import axios from 'axios';
const BASE_URL = `http://dev-youbhd1.geto.co.kr/`;
const LIST_MEMBERS_URL = `${BASE_URL}members_youbhd1_tesst.json`;

export const getAllmembers = async () => {
    const {
        data: {
            data: { members }
        }
    } = await axios(LIST_MEMBERS_URL, {
        params: {
        }
    });

    return members;
};

export const getFindMembersName = (obj, args) => {
    axios({
        url: 'http://localhost:4000/graphql',
        method: 'post',
        data: {
            query: `
                membersName(name: "김승태") {
                    id
                    name
                }
            `
        }
    }).then((result) => {
        console.log(result.data)
    });



    //axios.get(LIST_MEMBERS_URL)
    //.then((response) => {
    //    response.data.filter(b => {
    //        return b.name === args.name
    //    })
    //})
}