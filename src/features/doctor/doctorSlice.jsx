import { createSlice } from "@reduxjs/toolkit";
import doctor1 from "../../assets/doctor1.jpeg";
import doctor2 from "../../assets/doctor2.jpeg";
import doctor3 from "../../assets/doctor3.jpeg";
import doctor4 from "../../assets/doctor4.jpeg";
import doctor5 from "../../assets/doctor5.jpeg";
import doctor6 from "../../assets/doctor6.jpeg";

let allDoctors = [
  {
    imgUrl: doctor1,
    name: "John Smith",
    career: "General Practitioner",
    workingSchedule: [
      { day: "Tuesday", time: "6am - 10am" },
      { day: "Friday", time: "8am - 12am" },
    ],
    booksDetails: [],
  },
  {
    imgUrl: doctor2,
    name: "Michael Brown",
    career: "Cardiologist",
    workingSchedule: [
      { day: "Sunday", time: "4am - 9am" },
      { day: "Wednesday", time: "5am - 10am" },
    ],
    booksDetails: [],
  },
  {
    imgUrl: doctor3,
    name: "David Miller",
    career: "Pediatrician",
    workingSchedule: [
      { day: "Saturday", time: "7am - 11am" },
      { day: "Monday", time: "10am - 12am" },
    ],
    booksDetails: [],
  },
  {
    imgUrl: doctor4,
    name: "Daniel Johnson",
    career: "Dermatologist",
    workingSchedule: [
      { day: "Friday", time: "6am - 11am" },
      { day: "Thursday", time: "4am - 9am" },
    ],
    booksDetails: [],
  },
  {
    imgUrl: doctor5,
    name: "Jane Doe",
    career: "Psychiatrist",
    workingSchedule: [
      { day: "Wednesday", time: "3am - 6am" },
      { day: "Friday", time: "10am - 12am" },
    ],
    booksDetails: [],
  },
  {
    imgUrl: doctor6,
    name: "Michael Williams",
    career: "Neurologist",
    workingSchedule: [
      { day: "Thursday", time: "8am - 11am" },
      { day: "Monday", time: "2am - 5am" },
    ],
    booksDetails: [],
  },
];
const selectedDoctorTamplet = {
  name: "",
  carrer: "",
  workSchedule: {},
  imgUrl: null,
  booksDetails: [],
};

// const initialState = [
//   JSON.parse(localStorage.getItem("allDoctors")) || allDoctors,
//   JSON.parse(localStorage.getItem("selectedDoctor")) || selectedDoctorTamplet,
// ];

// const doctorSlice = createSlice({
//   name: "doctor",
//   initialState,
//   reducers: {
//     addDoctorDetails: {
//       reducer(state, action) {
//         state = action.payload;
//         localStorage.setItem("selectedDoctor", JSON.stringify(state));
//         console.log(JSON.parse(localStorage.getItem("selectedDoctor")));
//       },
//       prepare(name, carrer, workSchedule, imgUrl) {
//         let booksNumber;
//         for (let i = 0; i <= allDoctors.length -1; i++) {
//           if (allDoctors[i].name == name) {
//             booksNumber = allDoctors[i].booksNumber;
//           }
//         }
//         return {
//           payload: { name, carrer, workSchedule, imgUrl, booksNumber },
//         };
//       },
//     },
//     addBook: {
//       reducer(state, action) {
//          // Find the index of the doctor whose book number needs to be incremented
//          const doctorIndex = state[0].findIndex(doctor => doctor.name === state[1].name);

//          // Create a new state object
//          const newState = state.map((item, index) => {
//            if (index === 1) {
//              // Update the booksNumber of the selected doctor
//              return { ...item, booksNumber: item.booksNumber + 1 };
//            } else if (index === 0 && doctorIndex !== -1) {
//              // Update the booksNumber and booksDetails of the corresponding doctor in the list
//              return state[0].map((doctor, idx) => {
//                if (idx === doctorIndex) {
//                  return {
//                    ...doctor,
//                    booksNumber: doctor.booksNumber + 1,
//                    booksDetails: [...doctor.booksDetails, action.payload],
//                  };
//                }
//                return doctor;
//              });
//            }
//            return item;
//          });

//          // Update the state with the new state object
//          return newState;
//       },
//       prepare(name, number) {
//          return {
//            payload: { name, number },
//          };
//       },
//      },
//   },
// });

// export const selectDoctorDetails = (state) => state.doctor;
// export const { addDoctorDetails, addBook } = doctorSlice.actions;

// export default doctorSlice.reducer;

const initialState = [allDoctors, selectedDoctorTamplet];

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    addDoctorDetails: {
      reducer(state, action) {
        const { name, carrer, workSchedule, imgUrl } = action.payload;
        const newSelectedDoctor = { name, carrer, workSchedule, imgUrl };
        return [state[0], newSelectedDoctor];
      },
      prepare(name, carrer, workSchedule, imgUrl) {
        return {
          payload: { name, carrer, workSchedule, imgUrl },
        };
      },
    },
    addBook: {
      reducer(state, action) {
        // Find the index of the { selected doctor } whose book details needs to be added
        const selectedDoctorIndex = state[0].findIndex(
          (doctor) => doctor.name === state[1].name
        );

        // Create a new state object to apply the updates 
        const newState = state.map((item, index) => {
          
          // Update the booksDetails of the selected doctor in all doctors list
           if (index === 0 && selectedDoctorIndex !== -1) {
            /* all doctors */
            return state[0].map((doctor, idx) => {
              //check if the current doctor index = index of the selected doctor
              if (idx === selectedDoctorIndex) {
                return {
                  ...doctor,
                  booksDetails: [...doctor.booksDetails, action.payload],
                };
              }
              //return the doctor if the index doesn't match
              return doctor;
            });
          }
          return item;
        });

        // Update the state with the new state object
        return newState;
      },
      prepare(name, number) {
        return {
          payload: { name, number },
        };
      },
    },
  },
});

export const selectDoctorDetails = (state) => state.doctor;
export const { addDoctorDetails, addBook } = doctorSlice.actions;

export default doctorSlice.reducer;
