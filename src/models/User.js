
class User {
    constructor(url, name, email, dateOfBirth) {
        this.url = url;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
    getEmailData() {
        let splitedEmail = this.email.split("@");
        let hiddenEmail = splitedEmail[0].slice(0, 3) + "...@" + splitedEmail[1];
        return hiddenEmail;
    }
    getDateOfBirthData() {
        let dateBase = new Date(this.dateOfBirth);
        let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        let newDate = `${dateBase.getDate()}.${month[dateBase.getMonth()]}.${dateBase.getFullYear()}`;
        return newDate;
    }
}

export default User;