import React, {useState, useRef} from 'react';
import './Display.css';
import Icon from '../Icon/Icon';
const Display = (props) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({});
  const buttonRef = useRef(null);

  const toggleOverlay = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();

    setOverlayStyle({
      top: buttonRect.bottom + window.scrollY + 5,
      left: buttonRect.left + window.scrollX,
    });

    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div>
      <button
        onClick={toggleOverlay}
        ref={buttonRef}
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px 10px',
          marginTop: '10px',
          cursor: 'pointer',
        }}
      >
        <span className="display-button">
          <Icon iconName="Display" /> <p className="button-text">Display</p>{' '}
          <Icon iconName="Down" />
        </span>
      </button>

      {isOverlayVisible && (
        <div className="disp-overlay" style={overlayStyle}>
          <div className="disp-overlay-content">
            <p>Grouping</p>
            <select
              className="filter-select"
              value={props.groupingBy}
              onChange={props.handleGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="disp-overlay-content">
            <p>Ordering</p>
            <select
              className="filter-select"
              value={props.orderingBy}
              onChange={props.handleOrderingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Display;
