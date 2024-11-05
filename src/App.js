import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Faculty from './Components/Faculty';
import Login from './Components/Login';
import Register from './Components/Register';
import Timetable from './Components/Timetable';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" component={Courses} />
                <Route path="/faculty" component={Faculty} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/timetable" component={Timetable} />
            </Switch>
        </Router>
    );
};

export default App;
