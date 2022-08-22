class User {
	firstName: string; 
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName =lastName;
	}

	getFullname(): string{
		return this.firstName + " " + this.lastName;
	} 
}

const user = new User("Vitaliy","Petriv")
console.log(user.getFullname());
