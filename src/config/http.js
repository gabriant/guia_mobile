// Axios
// window.axios = require('axios')
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8000'

import axios from 'axios'

const STATUS = 'dev'

const BASE_URL = {
  'dev': 'http://localhost:8000',
  'production': 'insiraurlaqui.com'
}

export const API_URL = BASE_URL[STATUS] + '/api/v1'
export const BASE_TOKEN = BASE_URL[STATUS]

const API = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': API_URL
    }
})

export default API

