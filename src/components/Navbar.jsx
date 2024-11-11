import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";

function Navbar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && query.trim() !== '') {
            navigate(`/search?query=${query}`);
        }
    };

    return (
        <nav className="w-full bg-white shadow-md p-4 border-b border-gray-200 flex justify-evenly items-center">
            <div>
                <Link
                    to="/"
                    className="text-gray-800 font-semibold text-lg ml-4 flex items-center space-x-2"
                >
                    <img src="/Logo.png" alt="Girman Logo" className="w-[220px] h-[62px]" />
                    {/* <span className="font-bold ">Girman Technologies</span> */}
                </Link>
            </div>

            <div className="flex space-x-8 text-gray-800 font-medium ml-12">
                {window.location.pathname === "/search" ? (
                    <Input
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleSearch}
                        className="p-2 border rounded-lg"
                    />
                ) : (
                    <>
                        <NavLink
                            to="/search"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold underline"
                                    : "hover:text-blue-600 hover:font-semibold hover:underline transition-colors"
                            }
                        >
                            SEARCH
                        </NavLink>
                        <a
                            href="https://girmantech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 hover:font-semibold hover:underline transition-colors"
                        >
                            WEBSITE
                        </a>
                        <a
                            href="https://www.linkedin.com/company/girmantech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 hover:font-semibold hover:underline transition-colors"
                        >
                            LINKEDIN
                        </a>
                        <a
                            href="mailto:contact@girmantech.com"
                            className="hover:text-blue-600 hover:font-semibold hover:underline transition-colors"
                        >
                            CONTACT
                        </a>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
