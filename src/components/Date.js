import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ date, deleteDate }) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{date.mascota}</h3>
            <p className="card-text">
                <span>Nombre Dueño: </span>
                {date.propietario}
            </p>
            <p className="card-text">
                <span>Fecha: </span>
                {date.date}
            </p>
            <p className="card-text">
                <span>Hora: </span>
                {date.hour}
            </p>
            <p className="card-text">
                <span>Sintomas: </span>
            </p>
            <p className="catd-text">{date.sintomas}</p>

            <button className="btn btn-danger" onClick={() => deleteDate(date.id)}>
                Borrar &times;
            </button>
        </div>
    </div>
);

/**
 * PropTypes
 */
Date.propTypes = {
    date: PropTypes.object.isRequired,
    deleteDate: PropTypes.func.isRequired
};

export default Date;
