import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarAfter from "../components/NavbarAfter";
import FilterTransportation from "../components/FilterTransportation";
import VehicleCard from "../components/VehicleCard";

const TransportationPage = () => {
  const location = useLocation();
  const vehicleData = [
    {
      id: 1,
      image: "/assets/images/vehicle/nmax.png",
      vehicleName: "Yamaha N-Max",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 100.000",
    },
    {
      id: 2,
      image: "/assets/images/vehicle/vario.png",
      vehicleName: "Honda Vario",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 70.000",
    },
    {
      id: 3,
      image: "/assets/images/vehicle/fazio.png",
      vehicleName: "Yamaha Fazzio",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 90.000",
    },
    {
      id: 4,
      image: "/assets/images/vehicle/scoopy.png",
      vehicleName: "Honda Scoopy",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 80.000",
    },
    {
      id: 5,
      image: "/assets/images/vehicle/beat.png",
      vehicleName: "Honda Beat",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 75.000",
    },
  ];

  const renderContent = () => {
    if (location.pathname === "/transportation") {
      return (
        <>
          <FilterTransportation />
          {vehicleData.map((item) => (
            <VehicleCard
              id={item.id}
              key={item.id}
              name={item.vehicleName}
              transmission={item.transmission}
              image={item.image}
              luggageValue={item.luggageValue}
              peopleValue={item.peopleValue}
              withDriver={item.withDriver}
              fromPrice={item.fromPrice}
            />
          ))}
        </>
      );
    }
    return <Outlet />;
  };

  return (
    <div style={styles.container}>
      <NavbarAfter />
      {renderContent()}
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: "calc(100vw - 17px)",
  },
};

export default TransportationPage;
