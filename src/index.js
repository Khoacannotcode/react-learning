import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1, name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
]


class Root extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Header title="Profile" />
          <Header title="Settings" />
          <Header title="Chat" />
          <Content activities={activities} />
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

class ActivityItem extends React.Component {
  render() {
    const {activity} = this.props;

    return (
      <div className="item">
        <div className="avatar">
          <img
            alt= {activity.text}
            src= {activity.user.avatar}
          />
          {/* Doug */}
        </div>

        <span className="time">
          {activity.timestamp}
        </span>
        <p>{activity.text}</p>
        <div className="commentCount">
          {activity.comments.length}
        </div>
      </div>
    );
  }
}


class Content extends React.Component {
  render() {
    const {activities} = this.props; //ES6 destructing
    return (      
      <div className="content">
        <div className="line"></div>

          {/* Use map function to loop each activity */}
          {activities.map((activity) => (
            <ActivityItem activity={activity} />
          ))}
      </div>
    )
  }
}
var mount = document.querySelector('#root');
ReactDOM.render(<Root />, mount);