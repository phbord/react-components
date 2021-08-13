import React from 'react';

const TemperatureInput = ({scale, scaleNames, temperature, setTemperature, onTemperatureChange}) => {
  //const [temperature, setTemperature] = React.useState('')
  const name = `scale${scale}`
  console.log(scale,'>>>',scaleNames)
  const scaleName = scaleNames[scale]
  
  const handleChange = e => onTemperatureChange(e.target.value)

  return (<>
    <div className="form-group">
      <label htmlFor={name}>Température (en {scaleName})</label>
      <input type="text" 
              id={name} 
              value={temperature} 
              onChange={handleChange} 
              className="form-control mb-3" />
    </div>
  </>);
};

export default TemperatureInput;