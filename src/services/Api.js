import axios from 'axios'

export default () => {
    return axios.create({
      baseURL: `https://examjs.herokuapp.com/`
    })
  }