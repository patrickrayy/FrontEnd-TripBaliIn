import { useParams } from "react-router-dom";
import RentalProviderCard from "./RentalProviderCard";

const DetailVehicle = () => {
  let { id } = useParams();
  const vehicleData = [
    {
      id: 1,
      image: "/asset/image/vehicle/nmax.png",
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
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 100,
          ratingStar: 5
        },
      ],
    },
    {
      id: 2,
      image: "/asset/image/vehicle/vario.png",
      type: "Motorcycle",
      vehicleName: "Honda Vario",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 70.000",
      rentalProvider: [
        {
          name: "PT. INTFINITY",
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 100,
          ratingStar: 5
        },
      ],
    },
    {
      id: 3,
      image: "/asset/image/vehicle/fazio.png",
      type: "Motorcycle",
      vehicleName: "Yamaha Fazzio",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 90.000",
      rentalProvider: [
        {
          name: "PT. INFINITY",
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 100,
          ratingStar: 5
        },
      ],
    },
    {
      id: 4,
      image: "/asset/image/vehicle/scoopy.png",
      type: "Motorcycle",
      vehicleName: "Honda Scoopy",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 80.000",
      rentalProvider: [
        {
          name: "PT. INFINITY",
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 100,
          ratingStar: 5
        },
      ],
    },
    {
      id: 5,
      image: "/asset/image/vehicle/beat.png",
      type: "Motorcycle",
      vehicleName: "Honda Beat",
      transmission: "Automatic",
      luggageValue: 0,
      peopleValue: 2,
      withDriver: false,
      fromPrice: "IDR 75.000",
      rentalProvider: [
        {
          name: "PT. INFINITY",
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 100,
          ratingStar: 5
        },
      ],
    },
  ];
  const vehicleDetail = vehicleData.find((item) => item.id == id)
  
  return (
  <div style={styles.container}>
    <div style={styles.vehicleHeaderSection} className="vehicle-header-section">
        <div className="vehicle-image">
            <img src={vehicleDetail.image} alt={vehicleData.vehicleName} />
        </div>
        <div style={styles.identity} className="vehicle-identity">
            <h2 style={styles.typeVehicle}>Type {vehicleDetail.type}</h2>
            <h1 style={styles.vehicleName} >{vehicleDetail.vehicleName.toUpperCase()}</h1>
            <h2 style={styles.transmission}>{vehicleDetail.transmission}</h2>
        </div>
    </div>
    <div className="rental-provider">
        <h1 style={styles.rentalProvider} >Select a rental provider</h1>
        {vehicleDetail.rentalProvider.map(item => (
            <RentalProviderCard 
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
        margin: "140px auto",
        padding: "20px"
    },
    vehicleHeaderSection: {
        display: "flex",
        flexDirection: "row",
        height: "180px",
    },
    typeVehicle: {
        fontSize: "15px",
        color: "#6F6F6F",
        fontWeight: "500"
    },
    vehicleName: {
        fontSize: "15px",
        fontWeight: "700",
        color: "black"
    },
    transmission: {
        fontSize: "15px",
        color: "#6F6F6F",
        fontWeight: "500"
    },
    identity: {
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 0 0 18px"
    },
    rentalProvider: {
        fontSize: "24px",
        fontWeight: "bold",
        margin: "6px 0 0 0"
    }
}

export default DetailVehicle;
