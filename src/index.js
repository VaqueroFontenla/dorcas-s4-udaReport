import React from 'react';
import ReactDOM from 'react-dom';
import UdaReport from './components/UdaReport.js';

const buttonText = 'get report'

const buttonStyles = {
    buttonTextColor: '#FFF',
    buttonBackground: '#CA1C24',
    buttonBorderColor: '#B7BCC6',
    buttonBorderWidth: '3px',
    borderRadius: '20px'
}

const data = {
    "address": "Calle Almagro, 20",
    "operation": 1,
    "lat": 40.4562923,
    "lon": -3.6768079,
    "area": 90,
    "property_type": 4,
    "construction_type": 2,
    "rooms": 3,
    "energy_cert": 1,
    "storage": 0,
    "garage": 0,
    "pool": 0,
    "ac": 1,
    "elevator": 1,
    "outside": 0,
    "agency": 1,
    "bathrooms": 1,
    "floor": 5,
    "common_zones": 1,
    "orientation_north": 1,
    "orientation_south": 1,
    "orientation_east": 1,
    "orientation_west": 1,
    "status": 5
}

ReactDOM.render(<UdaReport
    buttonText={buttonText}
    data={data}
/>, document.getElementById('root'));

export { buttonStyles };