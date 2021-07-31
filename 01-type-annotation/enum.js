"use strict";
var WeekDay;
(function (WeekDay) {
    WeekDay["SUNDAY"] = "Sunday";
    WeekDay["MONDAY"] = "Monday";
    WeekDay["TUESDAY"] = "Tuesday";
    WeekDay["WEDNESDAY"] = "Wednesday";
    WeekDay["THURSDAY"] = "Thursday";
    WeekDay["FRIDAY"] = "Friday";
    WeekDay["SATURDAY"] = "Saturday";
})(WeekDay || (WeekDay = {}));
;
var firstDayOfWeekDays = WeekDay.SUNDAY;
console.log("First day of week days is " + firstDayOfWeekDays);
