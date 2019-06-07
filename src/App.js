import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';

class App extends Component {
    state = {};

    render() {
        return (
            <div class="container">
                <Header title="Administrador Pacientes Veterinaria" />
            </div>
        );
    }
}

export default App;
