import React, { Component } from 'react';
import {withRouter} from 'react-router';
import routes from 'routes';

class PageTitle extends Component {
  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location) {
      const config = routes.find(route => route.path === this.props.location.pathname);
      if(!config) return;

      document.title = `${config.title} | Elemental Interviewing`;
    }
  }

  render() {
    return null;
  }
}

export default withRouter(PageTitle);