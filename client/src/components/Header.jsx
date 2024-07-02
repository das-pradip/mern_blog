// import React from 'react'
import { Navbar, TextInput, Button, Dropdown, Avatar, DropdownDivider } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";

// import { set } from "mongoose";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  // console.log(searchTerm);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };


  return (
    <Navbar className="border-b-2">
      {!isSearchActive && (
        <>
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Pradip's</span>
        Blog
      </Link>
      <form onSubmit={handleSubmit}>
        {/* TextInput coming from flowbite react */}
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          //  AiOutlineSearch create search icon inside the text input 
          className="hidden lg:inline "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {/* Button tag comes from flowbite react */}
      <Button className="w-auto h-10 lg:hidden" color="gray" pill onClick={() => setIsSearchActive(true)}>

        <AiOutlineSearch />

      </Button >



      <div className="flex gap-2 md:order-2">
        {/* FaMoon come from the react-icons/fa */}

        <>

          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button>

        </>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentUser.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>

          </Dropdown>

        ) : (<Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline >
            Sign In
          </Button>
        </Link>)
        }


        {/* Navbar.Toggle creates the hamsberger or 3 dot line */}
        <Navbar.Toggle />

        {/* <Navbar.Toggle onClick={() => setIsCollapseOpen(!isCollapseOpen)} /> */}
      </div>
      <Navbar.Collapse>

        <Button className="ml-2  w-12 my-1 h-10 mx-auto md:hidden sm:inline" as={"div"} color="gray" pill onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>


        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">
            Home
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">
            About
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      </>
      )}
      {isSearchActive && (
        <form onSubmit={handleSubmit} className="w-full flex">
          <TextInput
            type="text"
            placeholder="search..."
            rightIcon={AiOutlineSearch}
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button color="gray" pill onClick={() => setIsSearchActive(false)}>
            Cancel
          </Button>
        </form>
      )}
    </Navbar>
  )
}
