import Vue from "vue"
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  //baseURL: "http://localhost:18000"
  baseURL: "https://book.blockchainpirate.tech"
})
