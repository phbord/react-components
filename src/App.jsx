import React, { useState } from 'react'
import 'bootstrap';

import Form from 'components/Form'
import Converter from 'components/Converter';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="mb-5">
          <Form />
        </div>
          <Converter />
      </div>
    </div>
  );
}

export default App;
