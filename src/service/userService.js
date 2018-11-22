import { newData } from './../data/data';
import User from './../models/User';

const prepareData = (data) => {
    const dataArray = data.map((user) => {
        return new User(user.picture.thumbnail, user.name.first, user.email, user.dob.date);
    })

    return dataArray;
}

export const userArray = prepareData(newData);