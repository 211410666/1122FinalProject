import Wrapper from "../assets/wrappers/Navbar_66.js";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useRef } from "react";
const Navbar_66 = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);
  const mobileBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const handleMobileBtn = () => {
    mobileMenuRef.current.classList.toggle('hidden');
    setIsMobileMenuHidden(!isMobileMenuHidden);
  }
  return (
    <Wrapper>
      <header className="header">
        <div
          className="header-row container"
          role="navigation"
          aria-label="Main"
        >
          <div className="header-left">
            <div className="logo">
              <img src="/images/IMG_8155.PNG" alt="" />
            </div>
          </div>
          <div className="header-right">
            <ul className="main-menu">
              <li className="menu-item">
                <Link to="#" className="active">
                  Home
                </Link>
              </li>
              <li className="menu-item dropdown">
                <Link to="#">DataStruct +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/nQueenQuestion">N后問題</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/datastructInfix">中序式</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/datastructPrefix">前序式</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/datastructPostfix">後序式</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item dropdown">
                <Link to="#">Games +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/">Solitaire</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/">MIS_exam</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-item">
                <Link to="#">Rank</Link>
              </li>
              <li className="menu-item">
                <Link to="/signin">signin</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_66;
