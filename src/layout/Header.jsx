import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  // local state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // when rotue change goto top of the page
  const routeChange = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`py-5 fixed top-0 left-0 right-0 z-[1000] transition-none ${
        scrolled ? "bg-sky-100 shadow-sm" : ""
      }`}
    >
      <div className="container max-w-full md:px-4 lg:px-6 px-2">
        <div className="grid lg:grid-cols-[2fr_5fr] grid-cols-[4fr_1fr] items-center gap-5">
          <div>
            <h3 className="font-bold text-3xl font-poppins text-slate-800">
              <Link to="/">Prodd Tech</Link>
            </h3>
          </div>
          <div className="lg:block hidden">
            <ul className="text-right">
              <li className="inline-block">
                <Link
                  to="/"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  Home
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="/about"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  About
                </Link>
              </li>
              <li className="inline-block">
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
              <li className="inline-block">
                <Link
                  to="/contact"
                  onClick={routeChange}
                  className="font-poppins font-medium px-3 py-2 text-blue uppercase"
                >
                  Contact
                </Link>
              </li>
              <li className="inline-block">
                <a
                  href="tel:+447424057154"
                  className="btn btn-1 ml-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>{" "}
                  Call Us Now
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block">
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
        </div>
      </div>
    </header>
  );
}
