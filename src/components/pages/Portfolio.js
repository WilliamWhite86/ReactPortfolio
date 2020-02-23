import React from 'react';
import Project from '../Project.js';
import pwImage from '../photos/pw_generator.png';
import plannerImage from '../photos/day_planner.png';
import quizImage from '../photos/quiz_app.png';
import weatherImage from '../photos/weather_app.png';
import breweryImage from '../photos/wish.png';
import burgerImage from '../photos/burger_shot.png';
import fitnessImage from '../photos/move.png';

const projects = [
    {
        id: 1,
        name: 'Random Generator',
        link: 'https://williamwhite86.github.io/PasswordGenerator/',
        image: pwImage
    },
    {
        id: 2,
        name: 'Day Schedule Planner',
        link: 'https://williamwhite86.github.io/DayPlanner/',
        image: plannerImage
    },
    {
        id: 3,
        name: 'Javascript Quiz App',
        link: 'https://williamwhite86.github.io/QuizApplication/',
        image: quizImage
    },
    {
        id: 4,
        name: 'Weather Tracker',
        link: 'https://williamwhite86.github.io/WeatherDash/',
        image: weatherImage
    },
    {
        id: 5,
        name: 'Brewery Locator',
        link: 'https://williamwhite86.github.io/WishYouWereBeer/',
        image: breweryImage
    },
    {
        id: 6,
        name: 'Burger Eating Handlebars',
        link: 'http://lit-retreat-41832.herokuapp.com/',
        image: burgerImage
    },
    {
        id: 7,
        name: 'Fitness Goal Tracker',
        link: 'https://boiling-shore-52514.herokuapp.com/',
        image: fitnessImage
    }
];

function Porfolio() {
    return (
        <div>
            <Project projects ={projects} />;
        </div>
    )
};

export default Porfolio;