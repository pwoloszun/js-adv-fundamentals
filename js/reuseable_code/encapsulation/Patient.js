/*
* new Patient(params) class:
* - params has:
*   + nationalIdNo (required)
*   + name (optional, default: '[NO NAME]'
*   + dateOfBirth (optional, default: null)
*
*
* */

function patientExampleUsage() {
  var patient = new Patient({
    nationalIdNo: "11111111111",
    name: "Bob",
    dateOfBirth: "1971-03-21"
  });

  var name = patient.name;
  patient.getAge(); // in milliseconds
  patient.getNationalIdNo();
  patient.setNationalIdNo("12222222222");
}
