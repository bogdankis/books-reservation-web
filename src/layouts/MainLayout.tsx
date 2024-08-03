import { Outlet } from "react-router-dom"
import Footer from "../components-guest/Footer"
const MainLayout = () => {
  return (
    <>
    <Outlet/>
    <Footer/> {/*every page will have this components*/}
    </>
  )
}

export default MainLayout