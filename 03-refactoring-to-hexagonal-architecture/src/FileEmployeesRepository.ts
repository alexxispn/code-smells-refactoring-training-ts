import {Employee} from "./Employee";
import * as fs from "fs";
import {EmployeesRepository} from "./EmployeesRepository";
import {OurDate} from "./OurDate";

export class FileEmployeesRepository implements EmployeesRepository {
    private readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    obtainEmployees(): Employee[] {
        const data = fs.readFileSync(this.path, {encoding: 'utf8'});
        const employees: Employee[] = []
        data.split(/\r?\n/).forEach((str: string) => {
            let employeeData = str.split(", ");
            const employee = new Employee(employeeData[1], employeeData[3],
                new OurDate(new Date(employeeData[2])));
            employees.push(employee);
        });
        return employees;
    }
}
