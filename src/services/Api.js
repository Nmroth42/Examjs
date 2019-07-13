import axios from 'axios'

export default () => {
    return axios.create({
    
      baseURL: `https://examjs.herokuapp.com`
      // baseURL: `http://localhost:8080/`
      //  baseURL: `https://examjs.herokuapp.com/`
    })
  }