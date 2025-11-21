import { MouseEvent } from "react";
import React, { useState } from "react";
import ctbmsLogo from "../../assets/img/ctbms-logo.jpeg";


const CountsComponent = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#4A0404] to-[#800000] text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center number-block">
                        <div className="text-5xl md:text-6xl mb-2 font-bold number-block-number">40+</div>
                        <p className="text-xl text-white/90 number-block-text">Years of Service</p>
                    </div>
                    <div className="text-center number-block">
                        <div className="text-5xl md:text-6xl mb-2 font-bold number-block-number">5,000+</div>
                        <p className="text-xl text-white/90 number-block-text">Active Members</p>
                    </div>
                    <div className="text-center number-block">
                        <div className="text-5xl md:text-6xl mb-2 font-bold number-block-number">200+</div>
                        <p className="text-xl text-white/90 number-block-text">Annual Events</p>
                    </div>
                    <div className="text-center number-block">
                        <div className="text-5xl md:text-6xl mb-2 font-bold number-block-number">500+</div>
                        <p className="text-xl text-white/90 number-block-text">Scholarships Given</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CountsComponent; 