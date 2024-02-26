import {Employee} from "../src/Employee";
import {OurDate} from "../src/OurDate";
import {date} from "./dateHelper";

describe('Employee', () => {

  it('birthday', () => {
    const employee = new Employee("foo", "a@b.c", date("1990/01/31"));

    expect(employee.isBirthday(date("2008/01/30"))).toBeFalsy();
    expect(employee.isBirthday(date("2008/01/31"))).toBeTruthy();
  });

});
