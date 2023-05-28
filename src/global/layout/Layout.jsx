import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import './layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout