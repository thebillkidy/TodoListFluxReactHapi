import React, { PropTypes } from 'react';
import Router from 'react-router';
import './App.css';
var RouteHandler = Router.RouteHandler;

class App extends React.Component {
    constructor(props) {
        super(props);
    }
	
    render() {
        return (
            <div id="app" className="App-Container">
                {this.props.children}
            </div>
        );
    }
}

App.defaultProps = {

};

App.propTypes = {

};

export default App;
