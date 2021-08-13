import React from 'react';

import BoilingVedig from 'components/converter/BoilingVedig';

const Converter = () => {
  const [temperature, setTemperature] = React.useState('')

  const handleChange = e => setTemperature(e.target.value)
  
  return (
    <div className="mb-5">
      <h3>Convertisseur</h3>
      <div className="form-group">
        <label htmlFor="celsius">Température (en celsius)</label>
        <input type="text" id="celsius" value={temperature} onChange={handleChange} className="form-control mb-3" />
      </div>
      <BoilingVedig celsius={parseFloat(temperature)} />
    </div>
  );
};

export default Converter;