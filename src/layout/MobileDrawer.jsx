
// import component 👇
import { useState } from 'react'
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'
// import BannerSection from '../pages/about/BannerSection'

const MobileDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const routeChange = () => {
        window.scrollTo(0, 0);
        setIsOpen(false)
      };
    

    return (
        <>
          <div className="lg:hidden block" onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#000"
              className="bi bi-list ml-auto"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
            {/* <button onClick={toggleDrawer}>Show</button> */}
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                style={{width:180}}
            >
                <BannerSection >

               
                <ul className="">
              <li className="block" style={{padding:10}}>
                <Link
                  to="/"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  Home
                </Link>
              </li>
              <li className="block"  style={{padding:10}}>
                <Link
                  to="/about"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  About
                </Link>
              </li>
              <li className="block"  style={{padding:10}}>
                <Link
                  to="/services"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  Services
                </Link>
              </li>
              {/* <li className="inline-block">
                <Link
                  to="/products"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  Products
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="/blogs"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  Blogs
                </Link>
              </li> */}
              <li className="block"  style={{padding:10}}>
                <Link
                  to="/contact"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  Contact
                </Link>
              </li>
            
            </ul>

            <div className="pt-4 pb-4">
        <p className="text-center font-medium">
          &copy; {new Date().getFullYear()}. All Rights Reserved by{" "}
          <span className="text-sky-700">Prodd Tech </span>
        </p>
      </div>
            </BannerSection>
            </Drawer>
        </>
    )
}

export default MobileDrawer



 function BannerSection({children}) {
  return (
    <section style={{height:'100%'}} className="lg:pt-28 pt-20 lg:pb-20 pb-10 bg-[linear-gradient(to_bottom,#c7ecff_0,#f9efff_100%)]">
      <div className="container max-w-6xl mx-auto px-2" style={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'space-between'}}>
        {children}
      </div>
    </section>
  )
}
