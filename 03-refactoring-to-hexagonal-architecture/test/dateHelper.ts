import {OurDate} from "../src/OurDate";

export function date(dateString: string): OurDate {
  const [year, month, day] = dateString.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return new OurDate(date);
}
