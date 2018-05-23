import ReactGA from 'react-ga';
import { React, Component } from 'react';

class googleAnalytics extends Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };

    ReactGA.initialize('UA-119697128-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return; 
  }
}

export default googleAnalytics;