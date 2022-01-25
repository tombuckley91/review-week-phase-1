var carla = "not pink tonight!"; // string
var numberOfTimesCarlaHasNotWornPink = 1; // number
var hasBrew = true; // boolean

var bav; // undefined

var komal = null; // null

var students = [
  {
    name: "Najma",
    hidden: true,
  },
  {
    name: "Hassan",
    hidden: false,
  },
  {
    name: "Humayra",
    hidden: true,
  },
]; // 3

for (var i = 0; i < students.length; i++) {
  var student = students[i];

  if (student.hidden) {
    console.log("Hey " + student.name + "! Wake up!!");
  }
}
