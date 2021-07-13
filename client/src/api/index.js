
import Axios from 'axios';

const url="http://localhost:5000/hivetech"

export const getEmployees=()=>Axios.get(url);