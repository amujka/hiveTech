import * as api from '../../api';
import * as type from './actionTypes';
export const getEmployeesAction=()=>async(dispatch)=>{
    try {
        const {data}=await api.getEmployees()
        dispatch({
            type:type.GET_EMPLOYEES,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}