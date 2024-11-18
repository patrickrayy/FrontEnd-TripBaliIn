import React from 'react';

const NavbarTransportation = () => {
  return (
    <div style={styles.container}>
      <div style={styles.vehicleCategory} className="vehicle-categories">
        <h1 style={styles.h1Font}>Rental Kendaraan</h1>
        <form style={styles.formVehicle}>
          <div>
            <input
              defaultChecked
              style={styles.radioInput}
              type="radio"
              id="motor"
              name="vehicle"
              value="motor"
            />
            <label htmlFor="motor"/>Motor
          </div>
          <div>
            <input
              style={styles.radioInput}
              type="radio"
              id="mobil"
              name="vehicle"
              value="mobil"
            />
            <label htmlFor="mobil">Mobil</label>
          </div>
        </form>
        <hr style={styles.hr} />
      </div>
      <div style={styles.containerSection} className="location">
        <h1 style={styles.h1Font}>Lokasi</h1>
        <select style={styles.containerInput} name="location" id="location">
          <option value="">Lokasi</option>
          <option value="depok">Depok</option>
          <option value="jakarta">Jakarta</option>
        </select>
      </div>
      <div style={styles.containerDate} className="search-by-time">
        <div>
          <h1 style={styles.h1Font}>Tanggal Mulai</h1>
          <input
            style={styles.containerInput}
            type="date"
            name="date-start"
            id="date-start"
          />
        </div>
        <div>
          <h1 style={styles.h1Font}>Tanggal Selesai</h1>
          <input
            style={styles.containerInput}
            type="date"
            name="date-end"
            id="date-end"
          />
        </div>
        <div style={styles.containerSection}>
          <h1 style={styles.h1Font}>Waktu Mulai</h1>
          <input
            style={styles.containerInput}
            type="time"
            name="time-start"
            id="time-start"
          />
        </div>
        <div>
          <h1 style={styles.h1Font}>Waktu Selesai</h1>
          <input
            style={styles.containerInput}
            type="time"
            name="time-end"
            id="time-end"
          />
        </div>
        <button style={styles.buttonSearch}>Search</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    margin: "100px auto 40px",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0px 2px 4px 2px rgba(0,0,0,0.27)",
  },
  vehicleCategory: {
    width: "100%",
  },
  h1Font: {
    fontSize: "17px",
  },
  hr: {
    marginTop: "8px",
    color: "black",
    height: "2px",
  },
  radioInput: {
    margin: "0 5px 0 0",
    accentColor: "#0F67B1",
  },
  containerSection: {
    margin: "10px 0",
  },
  labelInput: {},
  formVehicle: {
    margin: "-4px 0 0 0",
    display: "flex",
    width: "140px",
    justifyContent: "space-between",
  },
  containerInput: {
    border: "2px solid black",
    borderRadius: "6px",
    width: "170px",
    backgroundColor: "transparent",
    color: "black",
    textAlign: "center",
  },
  containerDate: {
    display: "flex",
    width: "100%",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonSearch: {
    backgroundColor: "#0F67B1",
    width: "200px",
    borderRadius: "10px",
    height: "40px",
    marginTop: "20px",
    lineHeight: "10px",
  },
};

export default NavbarTransportation;
