import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
const MainLayout = () => {
  return (
    <>
    <Footer/> {/*every page will have this components*/}
    <Outlet/>
    </>
  )
}

export default MainLayout