import NavbarAfter from "../components/NavbarAfter";
import Footer from "../components/Footer";
import React from 'react';
import AcoContent from "../components/AccommodationContent";
import ScrollableVillaCards from "../components/VillaCard";
import HotelCard from "../components/HotelCard";

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
        const hotelData = [
            {
                title: "The Stones Hotel Legian",
                price: "3.789.039",
                location: "Jl. Raya Pantai Kuta Banjar Legian Kelod",
                image: "/assets/images/hotel-1.png",
            },
            {
                title: "Eden Hotel Kuta Bali",
                price: "420.279",
                location: "Jl. Kartika Plaza No.42, Kuta, Bali",
                image: "/assets/images/hotel-2.png",
            },
            {
                title: "Hilton Bali Resort",
                price: "3.509.980",
                location: "Jl. Raya Nusa Dua Selatan, Benoa, Bali",
                image: "/assets/images/hotel-3.png",
            },
            {
                title: "Nusa Dua Beach Hotel",
                price: "1.779.000",
                location: "Jl. Nusa Dua, Benoa, Kec. Kuta, Bali",
                image: "/assets/images/hotel-4.png",
            },
            {
                title: "Hotel ZIA Bali",
                price: "1.350.000",
                location: "Jl. Ciung Wanara no.17",
                image: "/assets/images/hotel-6.png",
            },
            {
                title: "Rofa Kuta Hotel",
                price: "420.279",
                location: "Jl. Nakula No.9, Legian, Kec. Kuta",
                image: "/assets/images/hotel-5.png",
            },
            {
                title: "Tandjung Sari Hotel",
                price: "3.567.890",
                location: "Jl. Danau Tamblingan No.41, Sanur",
                image: "/assets/images/hotel-7.png",
            },
            {
                title: "Hard Rock Hotel Bali",
                price: "2.538.420",
                location: "Jl. Pantai Kuta, Banjar Pande Mas",
                image: "/assets/images/hotel-8.png",
            },
            {
                title: "PrimeBiz Hotel Kuta",
                price: "378.093",
                location: "Jl. Raya Kuta No.66, Kuta, Bali",
                image: "/assets/images/hotel-9.png",
            },
            {
                title: "Amnaya Resort Kuta",
                price: "1.301.364",
                location: "Jl. Kartika Plaza Gg. Puspa Ayu No.99, Kuta",
                image: "/assets/images/hotel-10.png",
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
        <h1 style={{fontFamily: 'Montserrat, sans-serif', fontSize: "32px", fontWeight: "700", marginBottom: "20px", textAlign: 'left', marginLeft: '270px',marginTop: '90px'}}>Hotel Recommendations</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px"}}>
            {hotelData.map((hotel, index)=> (<HotelCard key={index}{...hotel}/>))}
        </div>
        <Footer/>
        </>
    )
}

export default AccommodationPage;

