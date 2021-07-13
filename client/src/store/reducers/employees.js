import * as type from '../actions/actionTypes';
const employeesReducer=(employees=[],action)=>{
    switch (action.type) {
        case type.GET_EMPLOYEES:
            return action.payload;
          
        case type.ADD_EMPLOYEE:
            return employees;
        default:
            return employees;
    }
}
export default employeesReducer;