import { useUserStore } from "../app/store";
import { useState } from "react";

const UserList = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const users = useUserStore((state) => state.users)
  const getUsers = useUserStore((state) => state.getUsers)
  const addNewUser = useUserStore((state) => state.addNewUser)

  const onSubmit = (e) => {
    e.preventDefault()

    // data confirm
    if (username && password) {
      addNewUser(username, password)
    }
  }
  return (
    <>
      <section id="add-user-page">
        <div className="container">
          <h2>Add New User</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => getUsers()}>get users</button>
            <button type="submit">Add User</button>
          </form>
        </div>
      </section>
    </>

  )
}
export default UserList