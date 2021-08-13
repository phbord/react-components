import React from 'react';

const BoilingVedig = ({celsius}) => {
  return (celsius >= 100 ? (
    <div className="alert alert-success">L'eau bout</div>
  ) : (
    <div className="alert alert-info">L'eau ne bout pas</div>
  )
)}

export default BoilingVedig;