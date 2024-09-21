import {useEffect, useState} from 'react';
import Card from '../Card/Card';
import Display from '../Display/Display';
import './Dashboard.css';
import ColHeader from '../ColHeader/ColHeader';

const Dashboard = ({tickets, users}) => {
  const [groupingBy, setGroupingBy] = useState(() => {
    return localStorage.getItem('groupingBy') || 'status';
  });
  const [orderingBy, setOrderingBy] = useState(() => {
    return localStorage.getItem('orderingBy') || 'priority';
  });
  const [filtered, setFiltered] = useState({});

  const handleGroupingChange = (event) => {
    setGroupingBy(event.target.value);
    localStorage.setItem('groupingBy', event.target.value);
  };
  const handleOrderingChange = (event) => {
    setOrderingBy(event.target.value);
    localStorage.setItem('orderingBy', event.target.value);
  };

  useEffect(() => {
    groupAndSortTickets(groupingBy, orderingBy);
  }, [groupingBy, orderingBy, tickets]);

  const groupAndSortTickets = (groupBy, orderBy) => {
    let grouped = {};

    if (groupBy === 'priority') {
      grouped = tickets?.reduce((acc, ticket) => {
        (acc[ticket.priority] = acc[ticket.priority] || []).push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'status') {
      grouped = tickets?.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'user') {
      grouped = tickets?.reduce((acc, ticket) => {
        (acc[ticket.userId] = acc[ticket.userId] || []).push(ticket);
        return acc;
      }, {});
    }

    for (const group in grouped) {
      grouped[group]?.sort((a, b) => {
        if (orderBy === 'priority') {
          return a.priority - b.priority;
        } else if (orderBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }
    setFiltered(grouped);
  };

  const getUserName = (userId) => {
    const user = users.filter((user) => user.id === userId);
    return user[0]?.name;
  };

  return (
    <div className="dashboard">
      <div className="dash-header">
        <Display
          groupingBy={groupingBy}
          orderingBy={orderingBy}
          handleGroupingChange={handleGroupingChange}
          handleOrderingChange={handleOrderingChange}
        />
      </div>
      <div className="filtered-tickets">
        {filtered &&
          Object.keys(filtered)?.map((group) => (
            <div className="groups" key={group}>
              {/* <h2>
                {groupingBy === 'priority' ? `Priority: ${group}` : group}
              </h2> */}
              <ColHeader
                group={group}
                groupingBy={groupingBy}
                users={users}
                count={filtered[group].length}
              />
              <div className="group-cards">
                {filtered[group]?.map((ticket, ind) => (
                  <Card
                    key={ticket.id + ind}
                    {...ticket}
                    user={getUserName(ticket.userId)}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
