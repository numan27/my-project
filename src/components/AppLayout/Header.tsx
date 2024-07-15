"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import CustomDropdownMenuTrigger from "../../../@/components/ui/custom-dropdown-trigger";
import IMAGES from "@/assets/images";
// import IMAGES from '~/assets/images';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, title: "Looks", path: "/looks" },
    { id: 2, title: "Stylists", path: "/stylists" },
    { id: 3, title: "Salons", path: "/salons" },
    { id: 4, title: "Beauty Schools", path: "/beauty-schools" },
    { id: 5, title: "Offers & Promotions", path: "/offers-promotions" },
  ];

  return (
    <div className="bg-[#1A1A1A] relative lg:h-[100px] py-4 border-b border-[#555555]">
      <div className="flex justify-between items-center h-24 mx-auto xl:px-8 md:px-4 h-full">
        {/* Logo */}
        <div className="flex xl:justify-start justify-center xl:w-fit w-full">
          <Link className="" href="/">
            <Image
              className="md:w-auto sm:w-[220px] w-[180px]"
              width={250}
              height={62}
              src={IMAGES.LOGO}
              alt="logo"
            />
          </Link>
        </div>

        {/* Navigation Icon */}
        <div
          onClick={handleNav}
          className="xl:hidden cursor-pointer z-20 absolute right-5"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Desktop Navigation */}
        <div className="flex justify-between mx-auto">
          <ul className="hidden xl:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="nav-link my-2 mx-4 transition-all duration-300 text-white hover:text-[#A47E1B] cursor-pointer"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:flex">
          <ul className="flex items-center gap-6">
            <li>
              <DropdownMenu>
                <CustomDropdownMenuTrigger className="custom-dropdown-trigger text-[#1A1A1A] font-[600] text-[17px] h-[50px] focus:outline-none w-[157px]">
                  For Pro
                </CustomDropdownMenuTrigger>
                <DropdownMenuContent className="w-auto min-w-40 bg-[#1A1A1A]">
                  <DropdownMenuItem>
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Save</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="duration-300 border-r border-[#8f8f8f] pr-6 py-2.5">
              <GoSearch
                className="cursor-pointer hover:scale-105 transition-all duration-200"
                color="#FFFFFF"
                size="24px"
              />
            </li>
            <li className="duration-300">
              <button className="font-[600] link-btn py-1 px-1 border-b-2 border-transparent hover:border-white text-[17px]">
                <Link href="/">Login</Link>
              </button>
            </li>
            <li className="cursor-pointer duration-300">
              <button className="border px-6 text-nowrap font-[600] outlined-btn text-[17px] h-[50px] rounded-md">
                Sign Up
              </button>
            </li>

            {/* <Button className='text-white' variant="link">Hello Shadcn</Button> */}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`xl:hidden mt-5 flex flex-col items-center bg-black w-full absolute left-0 transition-all duration-500 ease-in-out transform ${
          nav ? "translate-y-0 opacity-100 z-10" : "-translate-y-full opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-3 w-full font-[600] cursor-pointer text-center border-b mobile-nav-link border-gray-600 transition-all duration-300 hover:text-[#1A1A1A]"
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
