import axios from "axios";
const baseUrl = "http://localhost:3000/recipes";

function getAll() {
    return axios.get(baseUrl);
}

function addRecipe(newRecipe){
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.post(baseUrl , newRecipe, config)
}

function editRecipe(id, newRecipe){
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.put(`${baseUrl}/${id}`, newRecipe, config)
}

function deleteRecipe(id){
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.delete(`${baseUrl}/${id}`, config)
}

export default { getAll, addRecipe, deleteRecipe, editRecipe };