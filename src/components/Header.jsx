import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SunnyIcon from "@mui/icons-material/Sunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const logo = "/Images/GameLogo.png";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar variant={theme} expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            width="100"
            height="100"
            alt="Game Logo"
            className="me-2"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Search Bar - center aligned, full width on small screens */}
          <div className="mx-auto my-2 my-lg-0 w-100 px-3">
            <SearchBar />
          </div>

          {/* Navigation + Theme Toggle + Auth Buttons */}
          <Nav className="ms-auto align-items-center">
            <div className="d-flex align-items-center gap-2 ms-3">
              <div className="icon-circle" onClick={toggleTheme}>
                {theme === "light" ? (
                  <ModeNightIcon className="Theme-btn" />
                ) : (
                  <SunnyIcon className="Theme-btn" />
                )}
              </div>

              <div className="icon-circle">
                {/* Replace this with your actual Bookmark icon component */}
                <Nav.Link as={Link} to="/library">
                  <BookmarksIcon className="bi bi-bookmark-fill Theme-btn" />
                </Nav.Link>
              </div>
            </div>

            {/* Auth Buttons */}
            <SignedIn>
              <SignOutButton>
                <button className="btn btn-danger ms-2">Sign Out</button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn btn-primary ms-2">Sign In</button>
              </SignInButton>
            </SignedOut>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
