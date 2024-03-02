import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Pictures from './components/Pictures/Pictures';
import Schedule from './components/Schedule/Schedule';
import Faq from './components/Faq/Faq';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Footer from './components/Footer/Footer';

function App() {
    const [dayNedded, setDayNedded] = React.useState(1);

    const handleDayChange = (day: number) => {
        if (day > 3 || day < 1) return;
        setDayNedded(day);
        console.log(dayNedded);
    }

    return (
        <div className="App">
            <Header />
            <Home />
            <Events dayNedded={dayNedded} handleDayChange={handleDayChange} />
            <Schedule dayInput={dayNedded} handleDayChange={handleDayChange} />
            <Faq />
            <Sponsorship />
            <Footer />
            <Footer />
            <Pictures />
            <Footer />
            <Footer />
        </div>
    );
}

export default App;
