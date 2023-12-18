import { NextPage } from "next";
import React from "react"
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps { 
  children:React.ReactNode
}
const Layout: NextPage< LayoutProps > = ({ children } ) => { 
  return (
    <>
      <Header></Header>
      <main>
        { children }
      </main>
      <Footer></Footer>
   </>
     
  )
}

export default Layout;