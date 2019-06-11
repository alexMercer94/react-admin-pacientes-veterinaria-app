import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uui from 'uuid';

const initialState = {
    cita: {
        mascota: '',
        propietario: '',
        hour: '',
        date: '',
        sintomas: ''
    },
    error: false
};

class NewDate extends Component {
    state = { ...initialState };

    /**
     * Cuando el usuario escibre en los input, se edita el states
     */
    handleChange = e => {
        // Colocar lo que el usuario escribe en el state
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        });
    };

    /**
     * Cuando el usuario envia el formulario
     */
    handleSubmit = e => {
        e.preventDefault();

        // Extraer los valores del state
        const { mascota, propietario, hour, date, sintomas } = this.state.cita;

        // Validar que todos los valores esten llenos
        if (mascota === '' || propietario === '' || hour === '' || date === '' || sintomas === '') {
            this.setState({
                error: true
            });

            // Detener la ejecución
            return;
        }

        // Generar objeto con los datos
        const newDate = {
            ...this.state.cita
        };
        newDate.id = uui();

        // Agregar la cita al state de App
        this.props.createNewDate(newDate);

        // Colocar en el state el initialState
        this.setState({
            ...initialState
        });
    };

    render() {
        // Extraer el valor del state
        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center">LLena el formulario para crear una nueva cita</h2>
                    {error ? (
                        <div className="alert alert-danger mt-2 mb-5 text-center">
                            Todos los campos son obligatorios
                        </div>
                    ) : null}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    onChange={this.handleChange}
                                    value={this.state.cita.date}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hour"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hour}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los síntomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

/**
 * PropTypes
 */
NewDate.propTypes = {
    createNewDate: PropTypes.func.isRequired
};

export default NewDate;
