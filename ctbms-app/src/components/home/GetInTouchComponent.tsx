import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';


const GetInTouchComponent = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: 'Address',
            details: ['BBA Headquarters', 'Malleshwaram, Bangalore - 560003', 'Karnataka, India'],
        },
        {
            icon: Phone,
            title: 'Phone',
            details: ['+91 80 2334 5678', '+91 98765 43210', 'Mon-Sat: 10 AM - 6 PM'],
        },
        {
            icon: Mail,
            title: 'Email',
            details: ['info@bangalorebrahmin.org', 'events@bangalorebrahmin.org', 'support@bangalorebrahmin.org'],
        },
        {
            icon: Clock,
            title: 'Office Hours',
            details: ['Monday - Friday: 10 AM - 6 PM', 'Saturday: 10 AM - 2 PM', 'Sunday: Closed'],
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-1">
                {/* Section Header */}
                <div className="text-center mb-16">                    
                    <h2 className="text-4xl md:text-5xl text-[#4A0404] mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Description.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Contact Form */}
                    <Card className="lg:col-span-2 p-8">
                        <h3 className="text-3xl text-[#4A0404] mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-gray-700 mb-2">
                                        First Name *
                                    </label>
                                    <Input
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-gray-700 mb-2">
                                        Last Name *
                                    </label>
                                    <Input
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                                        Phone
                                    </label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 xxxxx xxxxx"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <Input
                                    id="subject"
                                    placeholder="What is this regarding?"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">
                                    Message *
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us more about your inquiry..."
                                    rows={6}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-[#800000] hover:bg-[#800000]/90"
                            >
                                Send Message
                            </Button>
                        </form>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-6 contact-us-home-block-container">
                        {contactInfo.map((info, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow contact-us-home-block">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800000] to-[#F59E0B] flex items-center justify-center flex-shrink-0">
                                        <info.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl text-[#4A0404] mb-2">{info.title}</h4>
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-gray-600">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Map Placeholder */}
                <Card className="p-6">
                    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-600">Map Location</p>
                            <p className="text-gray-500">Malleshwaram, Bangalore - 560003</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};
export default GetInTouchComponent; 