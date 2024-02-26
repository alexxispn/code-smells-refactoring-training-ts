import {OurDate} from "./OurDate";

export class Employee {

    private readonly birthDate: OurDate;
    private readonly firstName: string;
    private readonly email: string;

    constructor(firstName: string, email: string, birthDate: OurDate) {
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.email = email;
    }

    public isBirthday(today: OurDate): boolean {
        return today.isSameDay(this.birthDate);
    }

    public getEmail(): string {
        return this.email;
    }

    public getFirstName(): string {
        return this.firstName;
    }
}
