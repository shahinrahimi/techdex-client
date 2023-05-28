import { useState } from 'react'
import Basic from './components/Basic'
import { useCounterStore } from "./counter/counter"
import { Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './context/ThemeContext'
import { PageNotFound, Layout, Welcome } from './global'
import {
  UsersList,
  NewUser,
  EditUser,
  NotesList,
  NewNote,
  EditNote,
} from './pages'

function Counter() {
  const count = useCounterStore((state) => state.count)
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)
  return (
    <h1>count is: {count}</h1>
  )
}

function App() {
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)
  const count = useCounterStore((state) => state.count)
  return (
    <ThemeProvider>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path="new" element={<NewNote />} />
            <Route path=":id" element={<EditNote />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path="new" element={<NewUser />} />
            <Route path=":id" element={<EditUser />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
