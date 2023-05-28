import { create } from "zustand";
import axios from "axios";


const techdexApi = axios.create({
  baseURL: "http://localhost:3505/",
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const useUserStore = create((set) => ({
  users:[],
  getUsers: async () => {
    const response = await techdexApi.get("users")
      .then(res => res.data) // axios result will be in data
      .then(res => {
        if(res?.message){
          console.log(res?.message)
          console.log(res?.data)
        }
        return res.data // return users
      })
      .catch(e => {
        console.log(e)
      })
    if (response){
      set(state => ({ ...state, users: response}))
    }
  },
  addNewUser: async (username, password) => {
    const response = await techdexApi.post("users", {
      username,
      password
    })
      .then(res => res.data)
      .then(res => {
        console.log(res)
        return res
      })
      .catch(e => {
        console.log(e)
      })
  }
}))