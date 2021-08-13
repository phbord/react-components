import React from 'react';

import BoilingVedig from 'components/converter/BoilingVedig';
import TemperatureInput from './converter/TemperatureInput';
import ToFahrenheit from './converter/ToFahrenheit';
import ToCelsius from './converter/ToCelsius';

const Converter = () => {
  const [temperature, setTemperature] = React.useState(20)
  const [scale, setScale] = React.useState('c')
  const scaleNames = {
    c: 'Celsisus',
    f: 'Fahrenheit'
  }

  const handleCelciusChange = (temperature) => {
    setScale('c')
    setTemperature(temperature)
  }

  const handleFahrenheitChange = (temperature) => {
    setScale('f')
    setTemperature(temperature)
  }

  const tryConvert = (temperature, convert) => {
    const value = parseFloat(temperature)
    if (Number.isNaN(value)) {
      return ''
    }
    return (Math.round(convert(value) * 100) / 100).toString()
  }
  const celsius = scale === 'c' ? temperature : tryConvert(temperature, ToCelsius)
  const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, ToFahrenheit)
  
  return (
    <div className="mb-5">
      <h3>Convertisseur</h3>
      <TemperatureInput scale="c" 
                        scaleNames={scaleNames} 
                        temperature={celsius} 
                        setTemperature={setTemperature} 
                        onTemperatureChange={handleCelciusChange} />
      <TemperatureInput scale="f" 
                        scaleNames={scaleNames} 
                        temperature={fahrenheit} 
                        setTemperature={setTemperature} 
                        onTemperatureChange={handleFahrenheitChange} />
      <BoilingVedig celsius={celsius} />
    </div>
  );
};

export default Converter;