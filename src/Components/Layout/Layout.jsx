import Header from "../Header/Header";
import { Outlet } from "react-router";
import MYFooter from "../Footer/Footer";

export default function Layout() {
  return (
    <>
       <Header/> 

        <Outlet/>


       <MYFooter/>
    </>
  )
}
