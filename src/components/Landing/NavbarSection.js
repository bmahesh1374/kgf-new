import { SiGoogletranslate } from "react-icons/si";
import logo from "../../assets/Logo.png";
import "../Styles/NavbarSection.css";
import { LuLogIn } from "react-icons/lu";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

function NavbarSection() {
  const navbarCollapseRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const closeNavbar = () => {
    const collapse = navbarCollapseRef.current;
    if (collapse && collapse.classList.contains("show")) {
      const bsCollapse = window.bootstrap?.Collapse.getInstance(collapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        collapse.classList.remove("show");
      }
    }
  };

  const handleAnchorClick = (path, hash) => {
    closeNavbar();
    navigate(`${path}${hash}`);
  };

  return (
    <nav className="navbar navbar-expand-xl kgf-navbar">
      <div className="container-fluid flex-column">
        <div className="kgf-title">KAMMA GLOBAL FEDERATION (KGF)</div>
        <div className="d-flex w-100 nav-header">
         
          <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={logo} alt="KGF Logo" className="navbar-logo" />
          </NavLink>
          <div className="admin-member">
            <button> <LuLogIn />  ADMIN / MEMBER</button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav mx-auto align-items-end gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/aboutus"
                  data-bs-toggle="dropdown"
                  onClick={(e) => {
                    if (window.innerWidth >= 1200) {
                      e.stopPropagation();
                      const dropdownEl = e.currentTarget.parentElement;
                      const menu = dropdownEl.querySelector(".dropdown-menu");
                      if (menu) menu.classList.remove("show");
                      dropdownEl.classList.remove("show");
                      navigate("/aboutus");
                    }
                  }}
                >
                  About Us
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#sponsorship"
                      onClick={() => handleAnchorClick("/", "#sponsorship")}
                    >
                      Sponsorship
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#board-members"
                      onClick={() => handleAnchorClick("/", "#board-members")}
                    >
                      Our Board Members
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#member-benefits"
                      onClick={() => handleAnchorClick("/", "#member-benefits")}
                    >
                      KGF Member Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#talent-publications"
                      onClick={() =>
                        handleAnchorClick("/", "#talent-publications")
                      }
                    >
                      Talent Publications
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/services"
                  data-bs-toggle="dropdown"
                  onClick={(e) => {
                    if (window.innerWidth >= 1200) {
                      e.stopPropagation();
                      const dropdownEl = e.currentTarget.parentElement;
                      const menu = dropdownEl.querySelector(".dropdown-menu");
                      if (menu) menu.classList.remove("show");
                      dropdownEl.classList.remove("show");
                      navigate("/services");
                    }
                  }}
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleAnchorClick("/services", "#global")}
                    >
                      Global Network
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleAnchorClick("/services", "#knowledge")
                      }
                    >
                      Knowledge Sharing
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleAnchorClick("/services", "#training")
                      }
                    >
                      KGF Skill & Training
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleAnchorClick("/services", "#support")}
                    >
                      Support
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleAnchorClick("/services", "#blood-donors")
                      }
                    >
                      Blood Donors
                    </button>
                  </li>

                   <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleAnchorClick("/services", "#matrimonial")
                      }
                    >
                      Matrimonial
                    </button>
                  </li>
                   <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleAnchorClick("/services", "#job-portal")
                      }
                    >
                      Job Portal
                    </button>
                  </li>

                   <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleAnchorClick("/services", "#medical-assistance")
                      }
                    >
                      Medical Assistance
                    </button>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/familytree"
                  onClick={closeNavbar}
                >
                  Family Tree
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/gallery"
                  onClick={closeNavbar}
                >
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="contact-btn "
                  onClick={() => handleAnchorClick("/", "#contact")}
                >
                  Contact Us
                </button>
              </li>


              <li className="nav-item">
                <button className="donate-btn" onClick={closeNavbar} onClick={() => navigate("#donate")}>
                  Donate
                </button>
              </li>

              <li className="nav-item">
                <button className="membership-btn" onClick={closeNavbar}>
                  Membership
                </button>
              </li>

              <li className="nav-item">
                <button className="language-btn">
                  <SiGoogletranslate />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSection;
