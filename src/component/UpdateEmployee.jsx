// // import React, { useState,useEffect } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import EmployeeService from "./service/EmployeeService";
// // function UpdateEmployee() {

// //       const navigate = useNavigate();
// //   const{id}=useParams();
// //   const [employee, setEmployee] = useState({
// //     id: id,
// //     name: "",
// //     phone: "",
// //     email: "",
// //   });

// //   const handleChange = (e) => {
// //     const value = e.target.value;
// //     setEmployee({ ...employee, [e.target.name]: value });
// //   };
// //  useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await EmployeeService.getEmployeeById(employee.id);
// //         setEmployee(response.data);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   const updateEmployee = (e) => {
// //     e.preventDefault(); 
// //     EmployeeService.updateEmployee(employee,id) 
// //       .then((response) => {
// //         console.log('Employee saved:', response);
// //         navigate("/");
      
// //       })
// //       .catch((error) => {
// //         console.log('Error:', error);
       
// //       });
// //   };
 
// //   return (
// //     <>
// //       <div className="max-w-xl mx-40 bg-slate-700 px-8 my-20 rounded shadow py-4">
// //         <div className="text-4xl font-bold text-center tracking-wider px-8 py-4">
// //           <h1>Updated 👨‍💻 Employee</h1>
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
// //           <button onClick={updateEmployee} className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded">
// //            Update
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

// // export default UpdateEmployee;



// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import EmployeeService from "./service/EmployeeService";

// function UpdateEmployee() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [employee, setEmployee] = useState({
//     id: id,
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setEmployee({ ...employee, [e.target.name]: value });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await EmployeeService.getEmployeeById(id);
//         setEmployee(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const updateEmployee = (e) => {
//     e.preventDefault();
//     EmployeeService.updateEmployee(employee, id)
//       .then((response) => {
//         console.log("Employee updated:", response);
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   };

//   return (
//     <div className="max-w-xl mx-4 sm:mx-6 md:mx-8 bg-slate-700 px-8 py-6 my-20 rounded shadow space-y-4">
//       <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
//         Update Employee
//       </div>
//       <div>
//         <input
//           className="w-full py-2 px-4 text-slate-800 mb-4"
//           type="text"
//           name="name"
//           value={employee.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         <input
//           className="w-full py-2 px-4 text-slate-800 mb-4"
//           type="email"
//           name="email"
//           value={employee.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <input
//           className="w-full py-2 px-4 text-slate-800 mb-4"
//           type="number"
//           name="phone"
//           value={employee.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//         />
//       </div>
//       <div className="flex justify-center space-x-4">
//         <button
//           onClick={updateEmployee}
//           className="bg-green-400 hover:bg-green-700 text-white py-2 px-6 rounded"
//         >
//           Update
//         </button>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-red-400 hover:bg-red-700 text-white py-2 px-6 rounded"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UpdateEmployee;
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "./service/EmployeeService";

function UpdateEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        console.log("Employee updated:", response);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="max-w-xl mx-4 sm:mx-6 md:mx-8 bg-slate-700 px-8 py-6 my-20 rounded shadow space-y-4">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
        Update Employee
      </div>
      <div>
        <input
          className="w-full py-2 px-4 text-slate-800 mb-4 rounded"
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="w-full py-2 px-4 text-slate-800 mb-4 rounded"
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="w-full py-2 px-4 text-slate-800 mb-4 rounded"
          type="number"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={updateEmployee}
          className="bg-green-400 hover:bg-green-700 text-white py-2 px-6 rounded"
        >
          Update
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-400 hover:bg-red-700 text-white py-2 px-6 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UpdateEmployee;
