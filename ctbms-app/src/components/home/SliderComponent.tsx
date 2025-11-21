import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ImageWithFallback } from './ImageWithFallback';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


const SliderComponent = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        dotsClass: "slick-dots custom-dots",
    };

    const backgroundImages = [
        "https://images.unsplash.com/photo-1679841665700-2c962e7e652a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjMzNjAwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1696239107350-b7136e7099d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHNvdXRoJTIwaW5kaWFuJTIwdGVtcGxlJTIwZ29wdXJhbXxlbnwxfHx8fDE3NjM3MTU1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1708782462555-b3af03b4b3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nYWxvcmUlMjB2aWRoYW5hJTIwc291ZGhhJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNzE1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1572199430578-20ebcdf7ebed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGxpZ2h0aW5nJTIwbGFtcCUyMHBvb2phfGVufDF8fHx8MTc2MzcxNTUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12">
            {/* Background Slider */}
            <div className="absolute inset-0 z-10">
                <Slider {...sliderSettings} className="h-full w-full object-cover relative z-0">
                    {backgroundImages.map((img, index) => (
                        <div key={index} className="h-screen w-full outline-none">
                            <ImageWithFallback
                                src={img}
                                alt={`Background ${index + 1}`}
                                className="w-full h-full object-cover relative z-0"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};
export default SliderComponent; 