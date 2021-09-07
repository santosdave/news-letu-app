import React, { useEffect, useState } from 'react';
import Logo from './NytLogo';
import Navbar from './Navbar';
import { Link, useHistory} from "react-router-dom";
import { useLocation } from "react-router";
import { NAV_LINKS } from "../utils/constants";
import Button from "../components/Button";
import { getActiveNavLink } from '../utils/utility';
function HomeLayout({ children}) {
    const history= useHistory()
    const { pathname } = useLocation();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleMenu = () => {
        setShowMobileMenu((showMobileMenu) => !showMobileMenu);
    };
    useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);
    const handleLogout = () => {
        history.push('/sign-in');
    };
    return (
        <div className="lg:flex w-screen min-h-screen h-full bg-gray-100">
           <div id="desktop-menu" className="hidden lg:flex bg-white px-4 2xl:px-12 py-10 flex-col items-center justify-between">
                <div className="space-y-10 flex flex-col items-center">
                 <Logo />
                 <Navbar links={getActiveNavLink(NAV_LINKS, pathname)}/>
                </div>
                <div className="flex items-center space-x-9 cursor-pointer">
                    <Link to="/profile">
                        <Button
                            value=""
                            variant="primary"
                            icon="user"
                            
                        />
                    </Link>
                    
                    <Button
                        value=""
                        variant="primary"
                        icon="logout"
                        action={handleLogout}
                    />

                </div>
           </div>
           {showMobileMenu && (
               <div id="mobile-menu lg:hidden" className="  fixed bg-white z-10 w-screen h-screen flex-col items-center p-20 justify-center text-center space-y-20">
                    <Navbar links={getActiveNavLink(NAV_LINKS, pathname)}/>
                    <div className="flex items-center space-x-9  justify-center cursor-pointer">
                    <Link to="/profile">
                        <Button
                            value=""
                            variant="primary"
                            icon="user"
                            
                        />
                    </Link>
                    <Button
                        value=""
                        variant="primary"
                        icon="logout"
                        
                    />

                    </div>
                </div>
           )}
           
           <div className="lg:hidden z-20 fixed w-full px-5 py-2 bg-white flex items-center justify-between">
                <div>
                    <Button
                        value=""
                        variant="primary"
                        icon="menu"
                        action={handleMenu}
                    />
                </div>
                <Logo />
                <Button
                        value=""
                        variant="primary"
                        icon="search"
                        
                />
                
           </div>
            <section className="bg-gray-100 w-full px-5 lg:px-20 py-10 pt-24 lg:pt-10 flex items-start justify-start">
            
                {children}
            </section>
        </div>
    )
}

export default HomeLayout
