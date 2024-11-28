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
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 100,
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
          name: "PT. INTFINITY",
          totalPrice: "IDR 140.000",
          perDayPrice: "IDR 70.000",
          reviewValue: 100,
          ratingStar: 5
        },
      ],
    },
    // Additional vehicles...
  ];
  
  const vehicleDetail = vehicleData.find((item) => item.id == id);
  
  return (
    <div style={styles.container}>
      <div style={styles.vehicleHeaderSection} className="vehicle-header-section">
        <div className="vehicle-image">
          <img src={vehicleDetail.image} alt={vehicleDetail.vehicleName} style={styles.vehicleImage} />
        </div>
        <div style={styles.identity} className="vehicle-identity">
          <h2 style={styles.typeVehicle}>Type {vehicleDetail.type}</h2>
          <h1 style={styles.vehicleName}>{vehicleDetail.vehicleName.toUpperCase()}</h1>
          <h2 style={styles.transmission}>{vehicleDetail.transmission}</h2>
        </div>
      </div>
      <div className="rental-provider">
        <h1 style={styles.rentalProvider}>Select a rental provider</h1>
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
    margin: "140px auto",
    padding: "20px",
  },
  vehicleHeaderSection: {
    display: "flex",
    flexDirection: "row",
    height: "180px",
    flexWrap: "wrap", // Allow wrapping for smaller screens
    gap: "20px",
  },
  vehicleImage: {
    width: "100%",
    height: "auto",
    maxWidth: "400px", // Limit the max width of the image
    borderRadius: "8px",
  },
  typeVehicle: {
    fontSize: "15px",
    color: "#6F6F6F",
    fontWeight: "500",
  },
  vehicleName: {
    fontSize: "20px",  // Increased font size for better visibility
    fontWeight: "700",
    color: "black",
  },
  transmission: {
    fontSize: "15px",
    color: "#6F6F6F",
    fontWeight: "500",
  },
  identity: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "18px",
    width: "100%", // Ensure the identity section is full width on smaller screens
  },
  rentalProvider: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "6px 0 20px 0",  // Increased bottom margin for better spacing
    textAlign: "left",
  },

  // Mobile responsive styles (max-width: 768px)
  "@media (max-width: 768px)": {
    container: {
      width: "95%",  // Allow the container to use more space on small screens
    },
    vehicleHeaderSection: {
      flexDirection: "column",  // Stack the image and text vertically
      alignItems: "center",     // Center align the elements
      height: "auto",           // Allow the section to adjust based on content
    },
    vehicleName: {
      fontSize: "18px",  // Reduce font size for mobile
    },
    rentalProvider: {
      fontSize: "20px",  // Adjust the font size for better readability
    },
    vehicleImage: {
      maxWidth: "100%",  // Make the image fully responsive
    },
  },

  // Tablet and larger screens (min-width: 768px)
  "@media (min-width: 768px)": {
    vehicleHeaderSection: {
      flexDirection: "row", // Stack items side by side for tablet/desktop
      height: "180px",
    },
  },
};

export default DetailVehicle;
