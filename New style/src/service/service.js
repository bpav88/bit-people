import User from "../entities/User.js";
import { USER_API } from "../shared/constants";

const fetchData = () => {
    return fetch(USER_API)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            const listOfUsers = response.results;
            console.log(listOfUsers);
            const mappedUsers = listOfUsers.map((user) => {

                const { name, email, dob, picture, gender } = user;
                const { first, last } = name;
                const { date } = dob;
                const formatedDate = new Date(date).toLocaleDateString('de-DE');

                return new User(first, last, email, formatedDate, picture, gender);
            })
            return mappedUsers;
        })

}

export {
    fetchData
};