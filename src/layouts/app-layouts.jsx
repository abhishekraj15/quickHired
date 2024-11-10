import Header from "@/components/header";
import {
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  Phone,
} from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-400 pt-10 ">
        <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div>
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className="text-2xl font-bold uppercase text-gray-100"
              >
                {/* Hired */}
                <img src="logo.png" className=" w-16" />
              </Link>
            </div>
            <p className="mt-4 text-sm">
              Discover your dream job with Hired, the leading platform for
              connecting job seekers with top companies. Find your perfect fit
              today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <a href="/my-jobs" className="hover:text-white">
                  My Jobs
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-white">
                  Companies
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <HomeIcon />
                <span>123 Job St, Career City, CA 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail />
                <a href="mailto:support@Hired.com" className="hover:text-white">
                  support@Hired.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with the latest job postings and career tips.
            </p>
            <form className="flex flex-col gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg mb-2 sm:mb-0 sm:mr-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="container border-t border-gray-700 mt-8 pt-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 lg:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedinIcon />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Hired. All rights reserved.
            </p>
          </div>
        </div>
        <div className="p-10 text-center bg-gray-800 mt-4">
          Made by Brocode1508♥️
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
