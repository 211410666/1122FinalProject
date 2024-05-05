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
                <Link to="#">signin</Link>
              </li>
            </ul>
            <Link
              to="#"
              id="hamburger-icon"
              className="mobile-toggler"
              aria-label="Mobile Menu"
              ref={mobileBtnRef}
              onClick={handleMobileBtn}
            >
              {isMobileMenuHidden ? <FaBars size={16} /> : <FaXmark size={16} />}

            </Link>
          </div>

          <div id="mobile-menu" className="mobile-menu hidden slideInDown" ref={mobileMenuRef}>
            <ul>
              <li className="menu-item">
                <Link to="#" className="active">
                  Home
                </Link>
              </li>

              <li className="menu-item dropdown">
                <Link to="#">Blogs +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/demoGetBlog_66">demo:SupaGetBlog</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/mid1Blog_66">mid1:SupaBlog</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/mid2BlogLocal_66">mid2:NodeBlogLocal</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/mid2BlogSupa_66">mid2:NodeBlogSupa</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item mega-menu">
                <Link to="#">Mega menu +</Link>
                <div className="mega-menu-wrapper slideInUp">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu-item">
                <Link to="#">Blog</Link>
              </li>
              <li className="menu-item">
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_66;
