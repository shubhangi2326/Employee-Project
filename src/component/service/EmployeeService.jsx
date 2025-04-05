import axios from "axios"

const BASE_URL="http://localhost:8080/employees"
class EmployeeService{
      saveEmployee(employee){
          return axios.post(BASE_URL,employee)  
      }
      getEmployees(){
            return axios.get(BASE_URL)  
        }
        getEmployeeById(id){
            return axios.get(BASE_URL+"/"+id)  
        }
        deleteEmployeeById(id){
            return axios.delete(BASE_URL+"/"+id)  
        }
        updateEmployee(employee,id){
            return axios.put(BASE_URL+"/"+id, employee)  
        }
}
export default new EmployeeService;