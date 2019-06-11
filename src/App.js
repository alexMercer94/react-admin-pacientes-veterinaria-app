import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewDate from './components/NewDate';
import DatesList from './components/DatesList';

class App extends Component {
    state = {
        dates: []
    };

    /**
     * Cuando la apliación carga
     */
    componentDidMount() {
        const datesLS = localStorage.getItem('dates');
        if (datesLS) {
            this.setState({
                dates: JSON.parse(datesLS)
            });
        }
    }

    /**
     * Cuando se elimina o agrega une cita se agrega a localstorage
     */
    componentDidUpdate() {
        localStorage.setItem('dates', JSON.stringify(this.state.dates));
    }

    /**
     * Get Date's data from NewDate component
     */
    createNewDate = data => {
        // Copiar el state actual
        const dates = [...this.state.dates, data];

        // Añadir el nuevo state
        this.setState({
            dates
        });
    };

    /**
     * Delete date from state
     */
    deleteDate = id => {
        // Tomar copia del state
        const actualDates = [...this.state.dates];

        // Utilizar filter para sacar el elemento @id del arreglo
        const dates = actualDates.filter(date => date.id === id);

        // Actualizar el state
        this.setState({
            dates
        });
    };

    render() {
        return (
            <div className="container">
                <Header title="Administrador Pacientes Veterinaria" />
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <NewDate createNewDate={this.createNewDate} />
                    </div>
                    <div className="mt-5 col-md-10 mx-auto">
                        <DatesList dates={this.state.dates} deleteDate={this.deleteDate} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
