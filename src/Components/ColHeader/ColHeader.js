import Icon from '../Icon/Icon';
import UserPic from '../UserPic/UserPic';
import './ColHeader.css';
const ColHeader = (props) => {
  const priorityMap = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority',
  };
  const getName = (userId) => {
    const user = props.users.filter((user) => user.id === userId);
    return user[0]?.name;
  };
  return (
    <div className="col-header">
      {props.groupingBy === 'priority' && (
        <div className="priority">
          <Icon
            iconName={props.group == 4 ? 'UrgentColour' : 'P' + props.group}
          />
          <p className="priority-title">{priorityMap[props.group]}</p>
          <p>{props.count}</p>
        </div>
      )}

      {props.groupingBy === 'user' && (
        <div className="priority">
          <UserPic
            initials={getName(props.group)
              ?.split(' ')
              .map((word) => word[0].toUpperCase())
              .join('')}
          />
          <p className="priority-title">{getName(props.group)}</p>
          <p>{props.count}</p>
        </div>
      )}

      {props.groupingBy === 'status' && (
        <div className="priority">
          <Icon iconName={props.group.replace(/\s+/g, '')} />
          <p className="priority-title">{props.group}</p>
          <p>{props.count}</p>
        </div>
      )}
      <div>
        <Icon iconName="Add" />
        <Icon iconName="ThreeDotMenu" />
      </div>
    </div>
  );
};

export default ColHeader;
