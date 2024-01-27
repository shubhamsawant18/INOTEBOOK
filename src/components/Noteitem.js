// Noteitem.js
import React from 'react';

const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <div className="d-flex align-items-center">
              <i className="fas fa-trash mx-2"></i>
              <i className="fas fa-pen-to-square mx-2"></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
