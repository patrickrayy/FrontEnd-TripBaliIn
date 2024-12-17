import { useParams } from "react-router-dom";
import RentalProviderCard from "./RentalProviderCard";

const DetailVehicle = () => {
  let { id } = useParams();
  const vehicleData = [
    {
      id: 1,
      image: "/assets/images/vehicle/nmax.png",
      type: "Motorcycle",
      vehicleName: "Yamaha N-Max",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 100.000",
      rentalProvider: [
        {
          name: "PT. INFINITY",
          totalPrice: "IDR 200.000",
          perDayPrice: "IDR 100.000",
          reviewValue: 154,
          ratingStar: 5
        },
      ],
    },
    {
      id: 2,
      image: "/assets/images/vehicle/vario.png",
      type: "Motorcycle",
      vehicleName: "Honda Vario",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 70.000",
      rentalProvider: [
        {
          name: "MOTORLY",
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 41,
          ratingStar: 3
        },
      ],
    },
    {
      id: 3,
      image: "/assets/images/vehicle/fazio.png",
      type: "Motorcycle",
      vehicleName: "Yamaha Fazzio",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 90.000",
      rentalProvider: [
        {
          name: "PT. TRIPPY",
          totalPrice: "IDR 180.000",
          perDayPrice: "IDR 90.000",
          reviewValue: 80,
          ratingStar: 4
        },
      ],
    },
    {
      id: 4,
      image: "/assets/images/vehicle/scoopy.png",
      type: "Motorcycle",
      vehicleName: "Honda Scoopy",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 80.000",
      rentalProvider: [
        {
          name: "RideIn",
          totalPrice: "IDR 160.000",
          perDayPrice: "IDR 80.000",
          reviewValue: 29,
          ratingStar: 4
        },
      ],
    },
    {
      id: 5,
      image: "/assets/images/vehicle/beat.png",
      type: "Motorcycle",
      vehicleName: "Honda Beat",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 75.000",
      rentalProvider: [
        {
          name: "PT. ENGINS",
          totalPrice: "IDR 150.000",
          perDayPrice: "IDR 75.000",
          reviewValue: 48,
          ratingStar: 4
        },
      ],
    },
  ];

  const vehicleDetail = vehicleData.find((item) => item.id == id);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.vehicleHeaderSection}>
        <img
          src={vehicleDetail.image}
          alt={vehicleDetail.vehicleName}
          style={styles.vehicleImage}
        />
        <div style={styles.identity}>
          <h2 style={styles.typeVehicle}>Type: {vehicleDetail.type}</h2>
          <h1 style={styles.vehicleName}>{vehicleDetail.vehicleName.toUpperCase()}</h1>
          <h2 style={styles.transmission}>Transmission: {vehicleDetail.transmission}</h2>
        </div>
      </div>

      {/* Rental Providers */}
      <div style={styles.rentalProviderSection}>
        <h1 style={styles.rentalProviderTitle}>Select a Rental Provider</h1>
        {vehicleDetail.rentalProvider.map((item, index) => (
          <RentalProviderCard 
            key={index}
            companyName={item.name}
            ratingStar={item.ratingStar}
            reviewValue={item.reviewValue}
            totalPrice={item.totalPrice}
            perDayPrice={item.perDayPrice}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    margin: "100px auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", 
  },
  vehicleHeaderSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
    marginBottom: "30px",
  },
  vehicleImage: {
    width: "250px",
    height: "auto",
    borderRadius: "8px",
  },
  identity: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  },
  typeVehicle: {
    fontSize: "16px",
    color: "#555",
    fontWeight: "500",
    margin: "0",
    textAlign: "left",
  },
  vehicleName: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#333",
    margin: "0",
    textAlign: "left",
  },
  transmission: {
    fontSize: "16px",
    color: "#555",
    fontWeight: "500",
    margin: "0",
    textAlign: "left",
  },
  rentalProviderSection: {
    width: "100%",
    marginTop: "20px",
  },
  rentalProviderTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
    textAlign: "left",
  },
};

export default DetailVehicle;
