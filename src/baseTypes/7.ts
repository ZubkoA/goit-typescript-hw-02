/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Sunday = "WEEKEND",
  Monday = "WORKDAY",
  Tuesday = "WORKDAY",
  Wednesday = "WORKDAY",
  Thursday = "WORKDAY",
  Friday = "WORKDAY",
  Saturday = "WEEKEND",
}

function isWeekend(day: Days) {
  if (day === "WEEKEND") {
    console.log(true);
  } else {
    false;
  }
}
let day = isWeekend(Days.Sunday);
