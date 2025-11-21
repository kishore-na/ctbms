import { MouseEvent, useEffect } from "react";
import React, { useState } from "react";
import { Menu, X, Mail, Phone, Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import logoImage from '../../assets/img/ctbms-logo.jpeg';
import { Button } from '../ui/button';
import { NewsTicker } from "./NewsTickerComponent";

interface NavItem {
  label: string;
  path: string;
  submenu?: { label: string; path: string }[];
}


const HeaderComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setExpandedMobileSubmenu(null);
        window.scrollTo(0, 0);
    }, [location]);

    const navItems: NavItem[] = [
        { path: '/', label: 'Home' },
        {
            path: '/about',
            label: 'About Us',
            submenu: [
                { label: 'Secretaries', path: '/about/secretaries' },
                { label: 'Our Vision', path: '/about/vision' },
                { label: 'Office Bearer', path: '/about/office-bearers' },
                { label: 'Our History', path: '/about/history' },
                { label: 'Gallery', path: '/gallery' },
            ]
        },
        { path: '/events', label: 'Events' },
        { path: '/contact', label: 'Contact Us' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Youtube, href: '#' },
    ];

    const toggleMobileSubmenu = (label: string) => {
        setExpandedMobileSubmenu(expandedMobileSubmenu === label ? null : label);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            {/* Top Bar */}
            <div className={`bg-[#4A0404] text-white transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'h-0 py-0' : 'h-auto py-2'
                } hidden md:block`}>
                <div className="container mx-auto flex justify-between items-center text-sm px-4">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#F59E0B]" />
                            <span>+91 80 2334 5678</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#F59E0B]" />
                            <span>info@ctbms.com</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="hover:text-[#F59E0B] transition-colors"
                            >
                                <social.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header
                className={`relative z-50 transition-all duration-700 ease-in-out bg-[#F59E0B] ${isScrolled ? 'shadow-md' : 'backdrop-blur-sm'
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className={`flex items-center transition-all duration-700 ease-in-out ${isScrolled ? 'h-[55px]' : 'h-[130px]'
                        }`}>
                        {/* Logo Area (Left) */}
                        <div className="w-1/4 flex-shrink-0">
                            <Link to="/" className="flex items-center space-x-3">
                                <img
                                    src={logoImage}
                                    alt="BBA Logo"
                                    className={`rounded-full object-contain bg-[#4A0404] transition-all duration-700 ease-in-out ${isScrolled ? 'w-10 h-10' : 'w-20 h-20'
                                        }`}
                                />
                            </Link>
                        </div>

                        {/* Center Area: Title + Navigation */}
                        <div className="flex-1 flex flex-col justify-center items-center">
                            {/* Association Name */}
                            <div className={`hidden md:block text-center overflow-hidden transition-all duration-700 ease-in-out ${isScrolled ? 'h-0 opacity-0 mb-0' : 'h-auto opacity-100 mb-4'
                                }`}>
                                <h1 className="text-[#800000] font-bold text-2xl lg:text-3xl leading-tight whitespace-nowrap uppercase">
                                    ಚಿಂತಾಮಣಿ ತಾಲ್ಲೂಕು ಬ್ರಾಹ್ಮಣ ಮಹಾಸಭೆ
                                </h1>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="hidden md:flex items-center space-x-8">
                                {navItems.map((item) => (
                                    <div key={item.path} className="relative group">
                                        <Link
                                            to={item.path}
                                            className={`flex items-center gap-1 font-medium transition-colors py-2 ${location.pathname === item.path ? 'text-white' : 'text-[#4A0404] hover:text-white'
                                                }`}
                                        >
                                            {item.label}
                                            {item.submenu && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
                                            <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                                                }`}></span>
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {item.submenu && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                                                <div className="bg-white rounded-md shadow-xl overflow-hidden w-48 border-t-4 border-[#4A0404]">
                                                    {item.submenu.map((subitem: any) => (
                                                        <Link
                                                            key={subitem.path}
                                                            to={subitem.path}
                                                            className="block px-4 py-3 text-sm text-[#4A0404] hover:bg-[#F59E0B]/10 hover:text-[#800000] hover:pl-6 transition-all duration-200 border-b border-gray-100 last:border-0"
                                                        >
                                                            {subitem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Right Area / Mobile Toggle */}
                        <div className="w-1/4 flex justify-end">                          

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden text-[#4A0404]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X /> : <Menu />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <nav className="md:hidden py-4 border-t border-[#4A0404]/10 max-h-[calc(100vh-130px)] overflow-y-auto">
                            {navItems.map((item) => (
                                <div key={item.path}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            to={item.path}
                                            className={`flex-1 block py-3 px-4 hover:bg-[#4A0404] hover:text-white transition-colors ${location.pathname === item.path ? 'bg-[#4A0404] text-white' : 'text-[#4A0404]'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                        {item.submenu && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleMobileSubmenu(item.label);
                                                }}
                                                className="p-3 text-[#4A0404] hover:bg-[#4A0404] hover:text-white transition-colors"
                                            >
                                                <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileSubmenu === item.label ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Submenu */}
                                    {item.submenu && (
                                        <div className={`bg-[#4A0404]/5 overflow-hidden transition-all duration-300 ${expandedMobileSubmenu === item.label ? 'max-h-[500px]' : 'max-h-0'
                                            }`}>
                                            {item.submenu.map((subitem: any) => (
                                                <Link
                                                    key={subitem.path}
                                                    to={subitem.path}
                                                    className="block py-2 px-8 text-sm text-[#4A0404] hover:text-[#800000] font-medium border-l-4 border-transparent hover:border-[#4A0404]"
                                                >
                                                    {subitem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    )}
                </div>
            </header>

            {/* News Ticker - Fixed with Header */}
            <NewsTicker />
        </div>
    );
};
export default HeaderComponent; 