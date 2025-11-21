import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from "../../assets/img/ctbms-logo.jpeg";


const FooterComponent = () => {
    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Events', path: '/events' },
        { label: 'Contact Us', path: '/contact' },
    ];

    const resources = [
        { label: 'Membership', href: '#' },
        { label: 'Donations', href: '#' },
        { label: 'Gallery', href: '#' },
        { label: 'News & Updates', href: '#' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'Youtube' },
    ];

    return (
        <footer className="bg-[#4A0404] text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={logoImage} alt="BBA Logo" className="w-12 h-12 rounded-full bg-white/10 object-contain" />
                            <h3 className="text-xl font-bold">ಚಿಂತಾಮಣಿ ತಾಲ್ಲೂಕು ಬ್ರಾಹ್ಮಣ ಮಹಾಸಭೆ</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            ಚಿಂತಾಮಣಿ ತಾಲ್ಲೂಕು ಬ್ರಾಹ್ಮಣ ಮಹಾಸಭೆ - Preserving heritage, building community, and fostering cultural excellence since 1985.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F59E0B] hover:text-[#4A0404] flex items-center justify-center transition-colors"
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-[#F59E0B] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-[#F59E0B] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-[#F59E0B] mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    BBA Headquarters, Malleshwaram, Bangalore - 560003
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-[#F59E0B] flex-shrink-0" />
                                <span className="text-gray-300">+91 80 2334 5678</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-[#F59E0B] flex-shrink-0" />
                                <span className="text-gray-300">info@bangalorebrahmin.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-300 text-center md:text-left">
                            © {new Date().getFullYear()} Chintamani Taluk Bramhana Mahasabha. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default FooterComponent; 