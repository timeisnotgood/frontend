import axios from 'axios'

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"
const API_KEY = `AIzaSyBj9vF5R-W6s1WJtoF5krjU_WLY0ewhmgQ`
const rejester_url = `/accounts:signUp?key=${API_KEY}`

export const Registerapi = (input) =>{
    let data = {displayname : input.username, email :input.email, password:input.password}
    axios.post(rejester_url, data)
}