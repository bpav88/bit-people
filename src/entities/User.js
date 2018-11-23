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

    getFullName = () => {

        const newFirstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
        const newLastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
        return `${newFirstName} ${newLastName}`
    }
}

export default User;