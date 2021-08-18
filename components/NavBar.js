import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

const Links = [
  { linkName: "Home", linkLoc: "/" },
  {
    linkName: "Meet Me",
    linkLoc: "/about",
  },
  {
    linkName: "Work",
    linkLoc: "/work",
  },
  {
    linkName: "Contact",
    linkLoc: "/contact",
  },
];

const NavBar = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const showDropdown = useCallback(() => {
  //     let opposite = true;
  //     if (isOpen) {
  //       opposite = false;
  //     } else {
  //       opposite = true;
  //     }
  //     setIsOpen(opposite);
  //   }, [isOpen]);

  //   useEffect(() => {
  //     document.addEventListener("click", () => {
  //       let target1 = event.target.className;
  //       if (isOpen && target1 != "dropDown-btn") {
  //         setIsOpen(false);
  //       }
  //     });
  //   }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="link-container">
          <div className="text-links-container">
            {Links.map((link) => (
              <div className="navlink">
                <Link href={link.linkLoc}>
                  <a> {link.linkName} </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
