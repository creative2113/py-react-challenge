import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent: "space-between"}}>
          <div style={{height: "40px"}}>
            <NavLink className={'nav-link'} to={'/'} style={{height: "100%", display: "flex", columnGap: "10px", alignItems: "center"}}>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.87271 4.20491C9.87271 6.52721 7.9901 8.40982 5.6678 8.40982C3.34549 8.40982 1.46289 6.52721 1.46289 4.20491C1.46289 1.8826 3.34549 0 5.6678 0C7.9901 0 9.87271 1.8826 9.87271 4.20491Z" fill="#1A73E8"></path><path d="M21.4372 4.20491C21.4372 6.52721 19.5546 8.40982 17.2323 8.40982C14.9099 8.40982 13.0273 6.52721 13.0273 4.20491C13.0273 1.8826 14.9099 0 17.2323 0C19.5546 0 21.4372 1.8826 21.4372 4.20491Z" fill="#30DCF6"></path><path d="M32.9997 4.20491C32.9997 6.52721 31.1171 8.40982 28.7948 8.40982C26.4724 8.40982 24.5898 6.52721 24.5898 4.20491C24.5898 1.8826 26.4724 0 28.7948 0C31.1171 0 32.9997 1.8826 32.9997 4.20491Z" fill="#1A73E8"></path><path d="M9.17153 16.119C9.17153 18.4413 7.28893 20.3239 4.96663 20.3239C2.64432 20.3239 0.761719 18.4413 0.761719 16.119C0.761719 13.7967 2.64432 11.9141 4.96663 11.9141C7.28893 11.9141 9.17153 13.7967 9.17153 16.119Z" fill="#30DCF6"></path><path d="M21.0856 16.119C21.0856 18.4413 19.203 20.3239 16.8807 20.3239C14.5584 20.3239 12.6758 18.4413 12.6758 16.119C12.6758 13.7967 14.5584 11.9141 16.8807 11.9141C19.203 11.9141 21.0856 13.7967 21.0856 16.119Z" fill="#1A73E8"></path><path d="M32.9997 16.119C32.9997 18.4413 31.1171 20.3239 28.7948 20.3239C26.4724 20.3239 24.5898 18.4413 24.5898 16.119C24.5898 13.7967 26.4724 11.9141 28.7948 11.9141C31.1171 11.9141 32.9997 13.7967 32.9997 16.119Z" fill="#30DCF6"></path><path d="M9.17153 28.0325C9.17153 30.3548 7.28893 32.2375 4.96663 32.2375C2.64432 32.2375 0.761719 30.3548 0.761719 28.0325C0.761719 25.7102 2.64432 23.8276 4.96663 23.8276C7.28893 23.8276 9.17153 25.7102 9.17153 28.0325Z" fill="#1A73E8"></path><path d="M21.0856 28.0325C21.0856 30.3548 19.203 32.2375 16.8807 32.2375C14.5584 32.2375 12.6758 30.3548 12.6758 28.0325C12.6758 25.7102 14.5584 23.8276 16.8807 23.8276C19.203 23.8276 21.0856 25.7102 21.0856 28.0325Z" fill="#1A73E8"></path><path d="M32.9997 28.0325C32.9997 30.3548 31.1171 32.2375 28.7948 32.2375C26.4724 32.2375 24.5898 30.3548 24.5898 28.0325C24.5898 25.7102 26.4724 23.8276 28.7948 23.8276C31.1171 23.8276 32.9997 25.7102 32.9997 28.0325Z" fill="#1A73E8"></path></svg>
              <div style={{height: "100%", display: "flex", marginBottom: "5px"}}><h5 style={{color: "white", margin: "0px"}}>MetricsNavigator</h5></div>
            </NavLink>
          </div>
          <ul className='navbar-nav mb-2 mb-lg-0'>
            {isLoggedIn ? (
              <li className='nav-item'><NavLink className={'nav-link'} to={'/auth/user'}>User</NavLink></li>
            ) : (
              <>
                <li className='nav-item'><NavLink className={'nav-link'} to={'/auth/login'}>Login</NavLink></li>
                <li className='nav-item'><NavLink className={'nav-link'} to={'/auth/register'}>Register</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
