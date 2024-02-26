import {BirthdayService} from "./BirthdayService";
import {OurDate} from "./OurDate";
import {FileEmployeesRepository} from "./FileEmployeesRepository";

export class SomeServiceClient {

    runService(): void {
        const service = new BirthdayService();
        try {
            service.sendGreetings(new OurDate(new Date("2008/10/08")), "localhost", 25, "sender@here.com", new FileEmployeesRepository("employee_data.txt"));
        } catch (e) {
            console.log(e);
        }
    }
}
