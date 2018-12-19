import React from 'react';

import routes from '../routes';

export class Navigation extends React.Component{

  render() {

    return (

      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo hide-on-med-and-down">Hungry Games</a>
            <ul className="right">
              {routes.map((route,idx) => {
                if (route.navIgnore) {
                  return;
                }
                return <li key={idx}><a className="" href={`/${route.path}`} >{route.name}</a></li>
              })}
            </ul>
          </div>
        </nav>


      </div>


    );
  }
}

export default Navigation;
