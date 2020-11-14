import React from 'react';
import ReactDOM from 'react-dom';

import ConfigurationItem from './components/ConfigurationItem';

const wrapper = document.getElementById('container');
ReactDOM.render(<ConfigurationItem name='Primary font color' id='colors.primary' value='#000000'  />, wrapper);
