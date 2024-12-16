import React, { useState } from 'react';

const FilterTransportation = () => {
  // State for form inputs
  const [vehicle, setVehicle] = useState('motor');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Handle form submissions
  const handleSearch = () => {
    const filterData = {
      vehicle,
      location,
      startDate,
      endDate,
      startTime,
      endTime,
    };
    console.log('Search with filters:', filterData);
    // You can call an API or filter data here based on the form inputs
  };

  return (
    <div style={styles.container}>
      <div style={styles.vehicleCategory} className="vehicle-categories">
        <h1 style={styles.h1Font}>Rental Kendaraan</h1>
        <form style={styles.formVehicle}>
          <div>
            <input
              checked={vehicle === 'motor'}
              style={styles.radioInput}
              type="radio"
              id="motor"
              name="vehicle"
              value="motor"
              onChange={(e) => setVehicle(e.target.value)}
            />
            <label htmlFor="motor">Motor</label>
          </div>
          <div>
            <input
              checked={vehicle === 'mobil'}
              style={styles.radioInput}
              type="radio"
              id="mobil"
              name="vehicle"
              value="mobil"
              onChange={(e) => setVehicle(e.target.value)}
            />
            <label htmlFor="mobil">Mobil</label>
          </div>
        </form>
        <hr style={styles.hr} />
      </div>
      <div style={styles.containerSection} className="location">
        <h1 style={styles.h1Font}>Lokasi</h1>
        <select
          style={styles.containerInput}
          name="location"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
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
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <h1 style={styles.h1Font}>Tanggal Selesai</h1>
          <input
            style={styles.containerInput}
            type="date"
            name="date-end"
            id="date-end"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div style={styles.containerSection}>
          <h1 style={styles.h1Font}>Waktu Mulai</h1>
          <input
            style={styles.containerInput}
            type="time"
            name="time-start"
            id="time-start"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <h1 style={styles.h1Font}>Waktu Selesai</h1>
          <input
            style={styles.containerInput}
            type="time"
            name="time-end"
            id="time-end"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <button style={styles.buttonSearch} onClick={handleSearch}>
          Search
        </button>
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
    fontFamily: "Montserrat, sans-serif"
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

export default FilterTransportation;
