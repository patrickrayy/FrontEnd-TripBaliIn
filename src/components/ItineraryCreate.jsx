import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ItineraryCreate = ({ onCreate }) => {
  const [days, setDays] = useState(1);
  const [culturalAttractions, setCulturalAttractions] = useState([]);
  const [foodAttractions, setFoodAttractions] = useState([]);
  const [otherAttractions, setOtherAttractions] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [activities, setActivities] = useState([{ day: 1, rundown: [{ time: '', description: '' }] }]);
  const [itineraryTitle, setItineraryTitle] = useState('');
  const [loading, setLoading] = useState(false);

  
  const handleAddDay = () => {
    setActivities(prev => [
      ...prev,
      { day: prev.length + 1, rundown: [{ time: '', description: '' }] }
    ]);
    setDays(prev => prev + 1);
  };

  const handleRemoveDay = (day) => {
    const updatedActivities = activities.filter(activity => activity.day !== day);
    setActivities(updatedActivities);
    setDays(prev => prev - 1);
  };

  const handleActivityChange = (day, index, field, value) => {
    const updatedActivities = activities.map(activity => 
      activity.day === day ? {
        ...activity,
        rundown: activity.rundown.map((item, idx) => 
          idx === index ? { ...item, [field]: value } : item
        )
      } : activity
    );
    setActivities(updatedActivities);
  };

  const handleAddRundown = (day) => {
    const updatedActivities = activities.map(activity => 
      activity.day === day ? {
        ...activity,
        rundown: [...activity.rundown, { time: '', description: '' }]
      } : activity
    );
    setActivities(updatedActivities);
  };

  const handleRemoveRundown = (day, index) => {
    const updatedActivities = activities.map(activity => 
      activity.day === day ? {
        ...activity,
        rundown: activity.rundown.filter((_, idx) => idx !== index)
      } : activity
    );
    setActivities(updatedActivities);
  };

  const handleAttractionChange = (category, value) => {
    if (value.trim() === '') return;
    if (category === 'cultural') setCulturalAttractions(prev => [...prev, value]);
    else if (category === 'food') setFoodAttractions(prev => [...prev, value]);
    else if (category === 'other') setOtherAttractions(prev => [...prev, value]);
  };

  const handleRemoveAttraction = (category, value) => {
    if (category === 'cultural') setCulturalAttractions(prev => prev.filter(item => item !== value));
    else if (category === 'food') setFoodAttractions(prev => prev.filter(item => item !== value));
    else if (category === 'other') setOtherAttractions(prev => prev.filter(item => item !== value));
  };

  const handleKeyDown = (e, category) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value) {
        handleAttractionChange(category, value);
        e.target.value = ''; // Clear input
      }
    }
  };

  const calculateEndDate = (startDate, days) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days - 1);
    return endDate.toISOString().split('T')[0];
  };

  const handleSubmit = () => {
    if (!itineraryTitle || culturalAttractions.length === 0) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    const itineraryData = {
      title: itineraryTitle,
      startDate,
      endDate: calculateEndDate(startDate, days),
      days,
      activities,
      culturalAttractions,
      foodAttractions,
      otherAttractions,
    };

    // Simulate delay (e.g., API call)
    setTimeout(() => {
      onCreate(itineraryData);
      setLoading(false);
      alert('Itinerary created successfully!');
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create Your Itinerary</h1>

      {/* Itinerary Title */}
      <div style={styles.field}>
        <label style={styles.label}>Itinerary Title:</label>
        <input
          type="text"
          placeholder="Enter itinerary title"
          value={itineraryTitle}
          onChange={(e) => setItineraryTitle(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Start Date */}
      <div style={styles.field}>
        <label style={styles.label}>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          style={styles.input}
        />
      </div>

      {/* End Date */}
      <div style={styles.field}>
        <label style={styles.label}>End Date:</label>
        <input
          type="text"
          value={calculateEndDate(startDate, days)}
          readOnly
          style={{ ...styles.input, backgroundColor: '#e9e9e9', color: '#000' }}
        />
      </div>

      {/* Days Selection */}
      <div style={styles.field}>
        <label style={styles.label}>Number of Days:</label>
        <button onClick={handleAddDay} style={styles.button}>
          + Add Day
        </button>
      </div>

      {/* Days and Rundown */}
      {activities.map((activity, dayIndex) => (
        <div key={dayIndex} style={styles.field}>
          <h2 style={styles.subtitle}>Day {activity.day} Rundown</h2>
          <button
            onClick={() => handleRemoveDay(activity.day)}
            style={{ ...styles.button, backgroundColor: '#D9534F', marginBottom:'15px' }}
          >
            - Remove Day
          </button>
          {activity.rundown.map((item, index) => (
            <div key={index} style={styles.rundownField}>
              <label style={styles.label}>Time:</label>
              <DatePicker
                selected={item.time}
                onChange={(date) => handleActivityChange(activity.day, index, 'time', date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
                style={styles.input}
              />
              <label style={styles.label}>Description:</label>
              <input
                type="text"
                value={item.description}
                onChange={(e) => handleActivityChange(activity.day, index, 'description', e.target.value)}
                placeholder="Enter activity description"
                style={styles.input}
              />
              <button
                onClick={() => handleRemoveRundown(activity.day, index)}
                style={{ ...styles.button, backgroundColor: '#D9534F', marginLeft: '10px', marginTop:'15px' }}
              >
                - Remove Activity
              </button>
            </div>
          ))}
          <button onClick={() => handleAddRundown(activity.day)} style={styles.button}>
            + Add Activity
          </button>
        </div>
      ))}

      {/* Attractions */}
      <div style={styles.field}>
        <label style={styles.label}>Cultural Attractions:</label>
        <input
          type="text"
          placeholder="Add cultural attractions and press Enter"
          onKeyDown={(e) => handleKeyDown(e, 'cultural')}
          style={styles.input}
        />
        <ul>
          {culturalAttractions.map((attraction, index) => (
            <li key={index} style={styles.listItem}>
              {attraction}
              <button
                onClick={() => handleRemoveAttraction('cultural', attraction)}
                style={styles.removeButton}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Food Attractions:</label>
        <input
          type="text"
          placeholder="Add food attractions and press Enter"
          onKeyDown={(e) => handleKeyDown(e, 'food')}
          style={styles.input}
        />
        <ul>
          {foodAttractions.map((attraction, index) => (
            <li key={index} style={styles.listItem}>
              {attraction}
              <button
                onClick={() => handleRemoveAttraction('food', attraction)}
                style={styles.removeButton}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Other Attractions:</label>
        <input
          type="text"
          placeholder="Add other attractions and press Enter"
          onKeyDown={(e) => handleKeyDown(e, 'other')}
          style={styles.input}
        />
        <ul>
          {otherAttractions.map((attraction, index) => (
            <li key={index} style={styles.listItem}>
              {attraction}
              <button
                onClick={() => handleRemoveAttraction('other', attraction)}
                style={styles.removeButton}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit} style={styles.submitButton} disabled={loading}>
        {loading ? 'Creating...' : 'Create Itinerary'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'block',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    width: '1077px',
    minHeight: '1230px',
    alignItems:'left',
    marginTop: '70px',
    marginLeft:'40px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Montserrat, sans-serif',
    overflow: 'visible'
  },
  title: {
    fontSize: '40px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '650'
  },
  field: {
    marginBottom: '15px',
  },
  label: {
    display:'block',
    fontSize: '18px',
    fontWeight: '550',
    marginBottom:'10px',
    
  },
  input: {
    width: '100%',
    backgroundColor: '#e9e9e9',
    color: 'black',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '2px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#0F67B1',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#0F67B1',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginTop:'15px',
    fontSize: '18px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  rundownField: {
    marginBottom: '10px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 10px 0',
  },
  removeButton: {
    backgroundColor: '#D9534F',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
};

export default ItineraryCreate;
