interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "mawira";
  lastName: "nairobi";
  age: 22;
  location: "nairobi";
}

const student2i: Student = {
  firstName: "wiriama";
  lastName: "ariwam";
  location: "meru";
  age: 21;

}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const trow0 = document.createElement("tr");
const trow1 = document.createElement("tr");
const tdata0 = document.createElement("td");
const tdata1 = document.createElement("td");
const tdata2 = document.createElement("td");
const tdata3 = document.createElement("td");

tdata.innerHTML = ;
tdata.innerHTML = ;

trow0.appendChild(tdata0);
trow0.appendChild(tdata1);

table.appendChild(trow0);

tdata2.innerHTML = ;
tdata3.innerHTML = ;

trow1.appendChild(tdata2);
trow1.appendChild(tdata3);

table.appendChild(trow1);
