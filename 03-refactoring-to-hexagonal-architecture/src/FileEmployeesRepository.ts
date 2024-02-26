import {Employee} from "./Employee";
import * as fs from "fs";
import {EmployeesRepository} from "./EmployeesRepository";

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
            const employee = new Employee(employeeData[1], employeeData[0],
                employeeData[2], employeeData[3]);
            employees.push(employee);
        });
        return employees;
    }
}
