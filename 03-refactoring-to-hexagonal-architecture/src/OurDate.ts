export class OurDate {

    private date: Date;

    constructor(date: Date) {
            this.date = date;
    }

    public isSameDay(anotherDate: OurDate): boolean {
        return anotherDate.date.getDate() == this.date.getDate()
            && 1 + anotherDate.date.getMonth() == 1 + this.date.getMonth();
    }
}
