import axios from 'axios'

const instance = axios.create({
    baseURL: "https://fakehaportfolio.firebaseio.com/"
})

export default instance