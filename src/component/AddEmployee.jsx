// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import EmployeeService from "./service/EmployeeService";
// // function AddEmployee() {
// //   const [employee, setEmployee] = useState({
// //     id: "",
// //     name: "",
// //     phone: "",
// //     email: "",
// //   });

// //   const handleChange = (e) => {
// //     const value = e.target.value;
// //     setEmployee({ ...employee, [e.target.name]: value });
// //   };

// //   const saveEmployee = (e) => {
// //     e.preventDefault(); 
// //     EmployeeService.saveEmployee(employee) 
// //       .then((response) => {
// //         console.log('Employee saved:', response);
// //         navigate("/");
      
// //       })
// //       .catch((error) => {
// //         console.log('Error:', error);
       
// //       });
// //   };
// //  const reset=(e)=>{
// //   e.preventDefault();
// //  setEmployee({
// //   id: "",
// //   name: "",
// //   phone: "",
// //   email: "",
// //  })
// //  }
// //   const navigate = useNavigate();

// //   return (
// //     <>
// //       <div className="max-w-xl mx-40 bg-slate-700 px-8 my-20 rounded shadow py-4">
// //         <div className="text-4xl font-bold text-center tracking-wider px-8 py-6">
// //           <h1>Add 👨‍💻 New Employee</h1>
// //         </div>
// //         <div className="mx-10 my-2">
// //           <input
// //             className="w-full my-4 py-2 text-slate-800 px-2"
// //             type="text"
// //             name="name"
// //             value={employee.name}
// //             onChange={(e)=>handleChange(e)}
// //             placeholder="name"
// //           />
// //           <input
// //             className="w-full my-4 py-2 px-2  text-slate-800"
// //             type="email"
// //             name="email"
// //             value={employee.email}
// //             onChange={(e) => handleChange(e)}
// //             placeholder="email"
// //           />
// //           <input
// //             className="w-full my-4 py-2 px-2 
// //       text-slate-800"
// //             type="number"
// //             name="phone"
// //             value={employee.phone}
// //             onChange={(e) => handleChange(e)}
// //             placeholder="phone"
// //           />
// //         </div>
// //         <div className="flex space-x-4 px-20">
// //           <button onClick={saveEmployee} className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded">
// //             Save
// //           </button>
// //           <button onClick={reset} className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded">
// //             Clear
// //           </button>
// //           <button
// //             onClick={() => navigate("/")}
// //             className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default AddEmployee;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import EmployeeService from "./service/EmployeeService";

// function AddEmployee() {
//   const [employee, setEmployee] = useState({
//     id: "",
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setEmployee({ ...employee, [e.target.name]: value });
//   };

//   const saveEmployee = (e) => {
//     e.preventDefault();
//     EmployeeService.saveEmployee(employee)
//       .then((response) => {
//         console.log("Employee saved:", response);
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   };

//   const reset = (e) => {
//     e.preventDefault();
//     setEmployee({
//       id: "",
//       name: "",
//       phone: "",
//       email: "",
//     });
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="max-w-xl mx-4 sm:mx-6 md:mx-8 bg-slate-700 px-8 py-6 my-20 rounded shadow space-y-4">
//       <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
//         Add New Employee
//       </div>
//       <form onSubmit={saveEmployee} className="space-y-4">
//         <div>
//           <input
//             className="w-full py-2 px-4 text-slate-800 mb-4"
//             type="text"
//             name="name"
//             value={employee.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//           />
//           <input
//             className="w-full py-2 px-4 text-slate-800 mb-4"
//             type="email"
//             name="email"
//             value={employee.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//           />
//           <input
//             className="w-full py-2 px-4 text-slate-800 mb-4"
//             type="tel"
//             name="phone"
//             value={employee.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//             required
//           />
//         </div>
//         <div className="flex justify-center space-x-4">
//           <button
//             type="submit"
//             className="bg-green-400 hover:bg-green-700 text-white py-2 px-6 rounded"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={reset}
//             className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-6 rounded"
//           >
//             Clear
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate("/")}
//             className="bg-red-400 hover:bg-red-700 text-white py-2 px-6 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddEmployee;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "./service/EmployeeService";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log("Employee saved:", response);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-[40%] w-[50%] md:w-[100%] mx-4 sm:mx-6 md:mx-8 bg-slate-700 px-8 py-6 my-20 rounded shadow space-y-4">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
        Add New Employee
      </div>
      <form onSubmit={saveEmployee} className="space-y-4">
        <div>
          <input
            className="w-full py-2 px-4 text-slate-800 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            className="w-full py-2 px-4 text-slate-800 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            className="w-full py-2 px-4 text-slate-800 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:justify-center">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-700 text-white py-2 px-6 rounded mb-4 sm:mb-0"
          >
            Save
          </button>
          <button
            type="button"
            onClick={reset}
            className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-6 rounded mb-4 sm:mb-0"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-red-400 hover:bg-red-700 text-white py-2 px-6 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
