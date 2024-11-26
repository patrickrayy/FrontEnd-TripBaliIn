import NavbarAfter from "../components/NavbarAfter";
import Footer from "../components/Footer";
import React from 'react';
import AcoContent from "../components/AccommodationContent";
import ScrollableVillaCards from "../components/VillaCard";

const AccommodationPage = () => {

    const villaData = [
        {
            title: "Grania Bali Villas",
            price: "906.440",
            persons: 4,
            bedrooms: 2,
            hasPool: true,
            image: "/assets/images/villa-1.png",
        },
        {
            title: "Downtown Boutique Villas",
            price: "1.450.789",
            persons: 8,
            bedrooms: 4,
            hasPool: true,
            image: "/assets/images/villa-2.png",
        },
        {
            title: "Danoya Villa Seminyak",
            price: "1.578.380",
            persons: 6,
            bedrooms: 3,
            hasPool: true,
            image: "/assets/images/villa-3.png",
        },
        {
            title: "Jas Green Villas and Spa",
            price: "1.200.000",
            persons: 4,
            bedrooms: 2,
            hasPool: true,
            image: "/assets/images/villa-4.png",
        },
        {
            title: "Maharaja Villas",
            price: "1.217.890",
            persons: 4,
            bedrooms: 2,
            hasPool: true,
            image: "/assets/images/villa-5.png",
        },
        {
            title: "The Sawah Villa",
            price: "490.890",
            persons: 2,
            bedrooms: 1,
            hasPool: true,
            image: "/assets/images/villa-6.png",
        },
        {
            title: "Kayangan Villa Ubud",
            price: "837.118",
            persons: 2,
            bedrooms: 1,
            hasPool: true,
            image: "/assets/images/villa-7.png",
        },
        {
            title: "Noah Villa & Chapel",
            price: "560.738",
            persons: 6,
            bedrooms: 3,
            hasPool: true,
            image: "/assets/images/villa-8.png",
        }, 
    ]

    return (
        <>
        <NavbarAfter/>
        <AcoContent/>
        <h1 style={{fontFamily: 'Montserrat, sans-serif', fontSize: "32px", fontWeight: "700", marginBottom: "20px", textAlign: 'left', marginLeft: '270px',marginTop: '90px'}}>Good deals at Villas</h1>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "18px", fontWeight: "550", color: "#6f6f6f", marginBottom: "30px",marginRight: '640px' }}>Stay with your loved ones at deluxe villas at the best price!</p>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px"}}>
            {villaData.map((villa, index)=> (<ScrollableVillaCards key={index}{...villa}/>))}
        </div>
        <Footer/>
        </>
    )
}

export default AccommodationPage;

