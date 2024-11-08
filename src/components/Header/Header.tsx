"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header">
          <h1>My Store</h1>
          <div className="header-nav">
            <Link href="/">Home</Link>
            <Link href="/product">Product</Link>
            <Link href="/basket">Basket</Link>
          </div>
          <div className="header-btn">
            {!session ? (
              <Link href="/signin">Login</Link>
            ) : (
              <div className="user-info">
                <img
                  src={session.user.image}
                  alt="img"
                  className="user-image"
                />
                <div className="user-email">
                  <h5>{session.user.name}</h5>
                  <p>{session.user.email}</p>
                </div>

                <div className="img-btn" onClick={toggleMenu}>
                  <IoIosArrowDown />
                </div>

                {menu && (
                  <div className="modal">
                    <button onClick={handleLogout} className="logout-button">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
