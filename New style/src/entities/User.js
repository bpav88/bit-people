class User {
    constructor(firstName, lastName, email, birthDate, pictures, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = birthDate;
        this.pictures = pictures;
        this.gender = gender;
    }

    getHiddenEmail = () => {

        const splitedEmail = this.email.split("");
        splitedEmail.splice(3, (splitedEmail.indexOf("@") - 3), "...");

        const hiddenEmail = splitedEmail.join("");

        return hiddenEmail;
    }
}

export default User;