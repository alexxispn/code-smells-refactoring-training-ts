import {Employee} from "./Employee";

export interface EmployeesRepository {
    obtainEmployees(): Employee[];
}
