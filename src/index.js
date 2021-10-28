import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Root extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Header title="Profile" />
          <Header title="Settings" />
          <Header title="Chat" />
          <Content />
        </div>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div className="header">
          {/* Meu on the left side */}
          <div className="MenuIcon">
            <div className="dashTop"></div>
            <div className="dashBottom"></div>
            <div className="circle"></div>
          </div>

          {/* title on the middle */}
          <span className="title">
            {/* Using prop here */}
            {this.props.title}
          </span>

          {/* Search icon on the right */}
          <input type="text" className="searchInput" placeholder="Search ..." />
          <div className="fa fa-search searchIcon"></div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        <div className="item">
          <div className="avatar">
            <img
              alt="Doug"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
            {/* Doug */}
          </div>

          <span className="time">An hour ago</span>
          <p>Ate lunch</p>
          <div className="commentCount">2</div>
        </div>

        {/* ... */}
      </div>
    );
  }
}
var mount = document.querySelector('#root');
ReactDOM.render(<Root />, mount);