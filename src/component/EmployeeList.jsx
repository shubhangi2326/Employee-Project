// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import EmployeeService from './service/EmployeeService';

// const EmployeeList = () => {

//   const [loading, setLoading] = useState(true);
//   const [employees, setEmployees] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await EmployeeService.getEmployees();
//         setEmployees(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const deleteEmployee=(e,id)=>{
//     e.preventDefault();
//     EmployeeService.deleteEmployeeById(id)
//     .then(()=>{
//       if(employees){
//             setEmployees((prevElement)=>{
//               return prevElement.filter((employee)=>employee.id !==id);
//             }
//           )
//       }
//     })
//   }

//   const editEmployee = (e,id) => {
//     e.preventDefault();
//     navigate(`/editEmployee/${id}`);  
//    }
//   const navigate = useNavigate();

//   return (
//     <div className='container mx-auto my-8'>
//       <div>
//         <button 
//           onClick={() => navigate("/addEmployee")}
//           className='bg-slate-600 mx-40 my-12 hover:bg-blue-700 font-semibold px-20 py-4 rounded text-3xl'>
//           Add Employee 👨‍💻
//         </button>
//       </div>
//       <div>
//         <table className='shadow mx-40'>
//           <thead className='bg-slate-700'>
//             <tr>
//               <th className='px-6 py-3 uppercase tracking-wide'>Name</th>
//               <th className='px-6 py-3 uppercase tracking-wide'>Phone</th>
//               <th className='px-6 py-3 uppercase tracking-wide'>Email</th>
//               <th className='px-6 py-3 uppercase tracking-wide'>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {!loading && employees && employees.map((employee) => (
//               <tr className='hover:bg-white text-black key={employee.id}'>
//                 <td className='text-left px-6 py-4 whitespace-nowrap'>{employee.name}</td>
//                 <td className='text-left px-6 py-4 whitespace-nowrap'>{employee.phone}</td>
//                 <td className='text-left px-6 py-4 whitespace-nowrap'>{employee.email}</td>
//                 <td>
//                   <a onClick={(e,id)=>editEmployee(e,employee.id)} className='hover:text-green-500 hover:cursor-pointer'> Edit 🖊️ </a>
//                   <a onClick={(e,id)=>deleteEmployee(e,employee.id)} className='hover:text-red-500 hover:cursor-pointer'> Delete 🗑️</a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default EmployeeList;



import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from './service/EmployeeService';

const EmployeeList = () => {

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
      .then(() => {
        if (employees) {
          setEmployees((prevElement) => {
            return prevElement.filter((employee) => employee.id !== id);
          })
        }
      })
  }

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  }
  const navigate = useNavigate();

  return (
    <div className='container mx-auto my-8 px-4'>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => navigate("/addEmployee")}
          className='bg-slate-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded text-2xl md:px-16 md:py-4'>
          Add Employee 👨‍💻
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className='min-w-full shadow-md'>
          <thead className='bg-slate-700'>
            <tr>
              <th className='px-6 py-3 uppercase tracking-wide text-xs sm:text-sm md:text-base'>Name</th>
              <th className='px-6 py-3 uppercase tracking-wide text-xs sm:text-sm md:text-base'>Phone</th>
              <th className='px-6 py-3 uppercase tracking-wide text-xs sm:text-sm md:text-base'>Email</th>
              <th className='px-6 py-3 uppercase tracking-wide text-xs sm:text-sm md:text-base'>Action</th>
            </tr>
          </thead>
          <tbody>
            {!loading && employees && employees.map((employee) => (
              <tr className='hover:bg-white text-black' key={employee.id}>
                <td className='text-left px-6 py-4 whitespace-nowrap text-xs sm:text-sm md:text-base'>{employee.name}</td>
                <td className='text-left px-6 py-4 whitespace-nowrap text-xs sm:text-sm md:text-base'>{employee.phone}</td>
                <td className='text-left px-6 py-4 whitespace-nowrap text-xs sm:text-sm md:text-base'>{employee.email}</td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <a
                    onClick={(e) => editEmployee(e, employee.id)}
                    className='hover:text-green-500 hover:cursor-pointer text-xs sm:text-sm md:text-base'>
                    Edit 🖊️
                  </a>
                  <a
                    onClick={(e) => deleteEmployee(e, employee.id)}
                    className='hover:text-red-500 hover:cursor-pointer ml-2 text-xs sm:text-sm md:text-base'>
                    Delete 🗑️
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
