import React from 'react';
import './Card.css';
import Icon from '../Icon/Icon';
import UserPic from '../UserPic/UserPic';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-id">{props.id}</p>
        <UserPic
          initials={props.user
            ?.split(' ')
            .map((word) => word[0].toUpperCase())
            .join('')}
        />
        {/* <p className="card-user">{props.userId}</p> */}
      </div>
      <div className="card-content">
        <Icon iconName={props.status.replace(/\s+/g, '')} />
        <p className="card-title">{props.title}</p>
      </div>
      <div className="card-footer">
        <div className="card-priority">
          <Icon iconName={'P' + props.priority} />
        </div>
        <div className="card-tag">
          <p>{props.tag[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
