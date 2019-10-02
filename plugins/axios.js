import Vue from "vue"
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  //baseURL: "http://localhost:10000"
  baseURL: "http://va.api.blockchainpirate.tech"
})
