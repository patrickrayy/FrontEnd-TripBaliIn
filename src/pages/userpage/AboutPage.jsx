import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from 'react';
import AboutContent from "../../components/AboutContent";
import AboutHeader from "../../components/AboutHeader";

const AboutPage = () => {
    const leftContent = [
        {
            titlePart1: "Who",
            titlePart2: "We Are",
            description: 
            "Become a trusted travel platform that makes it easier for tourists to discover, plan and enjoy the best experiences in Bali, while exploring its unique culture and natural beauty.",
        },
        {
            titlePart1: "Our",
            titlePart2: "Mission",
            description:
            "Inspire travelers to experience Bali in depth through an accessible itinerary guide, with a focus on natural beauty, local culture and unique, memorable experiences.",
        },
    ];

    return (
        <>
        <Navbar/>
        <AboutHeader
            title="About Us"
            backgroundImage="/assets/images/beach-5548446.jpg"
        />
        <AboutContent
            leftContent={leftContent}
            rightImage="/assets/images/abtus.png"
        />
        <Footer/>
        </>
    )
}

export default AboutPage;