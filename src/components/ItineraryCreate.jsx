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
  const [loading, setLoading] = useState(false); // Loading state for submit button

  const handleAddDay = () => {
    setDays(prev => prev + 1);
    setActivities(prev => [
      ...prev,
      { day: days + 1, rundown: [{ time: '', description: '' }] }
    ]);
  };

  const handleActivityChange = (day, index, field, value) => {
    const updatedActivities = [...activities];
    updatedActivities[day - 1].rundown[index][field] = value;
    setActivities(updatedActivities);
  };

  const handleAddRundown = (day) => {
    const updatedActivities = [...activities];
    updatedActivities[day - 1].rundown.push({ time: '', description: '' });
    setActivities(updatedActivities);
  };

  const handleAttractionChange = (category, value) => {
    if (value.trim() === '') return;

    if (category === 'cultural') {
      setCulturalAttractions(prev => [...prev, value]);
    } else if (category === 'food') {
      setFoodAttractions(prev => [...prev, value]);
    } else if (category === 'other') {
      setOtherAttractions(prev => [...prev, value]);
    }
  };

  const calculateEndDate = (startDate, days) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + (days - 1));
    return endDate.toISOString().split('T')[0];
  };

  const handleSubmit = () => {
    if (!itineraryTitle || culturalAttractions.length === 0) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true); // Show loading indicator
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
          style={{ ...styles.input, backgroundColor: '#f5f5f5' }}
        />
      </div>

      {/* Days Selection */}
      <div style={styles.field}>
        <label style={styles.label}>Number of Days:</label>
        <button onClick={handleAddDay} style={styles.button}>
          + Add Day
        </button>
      </div>

      {/* Rundown */}
      {activities.map((activity, dayIndex) => (
        <div key={dayIndex} style={styles.field}>
          <h2 style={styles.subtitle}>Day {activity.day} Rundown</h2>
          {activity.rundown.map((item, index) => (
            <div key={index} style={styles.rundownField}>
              <label style={styles.label}>Time:</label>
              <DatePicker
                selected={item.time}
                onChange={(date) => handleActivityChange(activity.day, index, 'time', date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                style={styles.input}
              />
              <label style={styles.label}>Activity:</label>
              <input
                type="text"
                placeholder={`Activity ${index + 1}`}
                value={item.description}
                onChange={(e) => handleActivityChange(activity.day, index, 'description', e.target.value)}
                style={styles.input}
              />
            </div>
          ))}
          <button onClick={() => handleAddRundown(activity.day)} style={styles.button}>
            + Add Activity
          </button>
        </div>
      ))}

      {/* Cultural Attractions */}
      <div style={styles.field}>
        <label style={styles.label}>Cultural Attractions:</label>
        <input
          type="text"
          placeholder="Add cultural attraction"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAttractionChange('cultural', e.target.value);
              e.target.value = '';
            }
          }}
          style={styles.input}
        />
        <ul>
          {culturalAttractions.map((attraction, index) => (
            <li key={index} style={styles.listItem}>{attraction}</li>
          ))}
        </ul>
      </div>

      {/* Food Attractions */}
      <div style={styles.field}>
        <label style={styles.label}>Food Attractions:</label>
        <input
          type="text"
          placeholder="Add food attraction"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAttractionChange('food', e.target.value);
              e.target.value = '';
            }
          }}
          style={styles.input}
        />
        <ul>
          {foodAttractions.map((attraction, index) => (
            <li key={index} style={styles.listItem}>{attraction}</li>
          ))}
        </ul>
      </div>

      {/* Other Attractions */}
      <div style={styles.field}>
        <label style={styles.label}>Other Attractions:</label>
        <input
          type="text"
          placeholder="Add other attraction"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAttractionChange('other', e.target.value);
              e.target.value = '';
            }
          }}
          style={styles.input}
        />
        <ul>
          {otherAttractions.map((attraction, index) => (
            <li key={index} style={styles.listItem}>{attraction}</li>
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
  container: { padding: '20px', fontFamily: 'Montserrat, sans-serif' },
  title: { fontSize: '32px', marginBottom: '10px', marginTop: '50px', fontWeight: '650' },
  subtitle: { fontSize: '18px', marginBottom: '10px' },
  field: { marginBottom: '20px' },
  rundownField: { marginBottom: '10px' },
  label: { display: 'block', marginBottom: '5px' },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    backgroundColor: '#f0f0f0',
    color: '#000',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#0F67B1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#0F67B1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  listItem: { marginBottom: '5px', fontSize: '16px' },
};

export default ItineraryCreate;
