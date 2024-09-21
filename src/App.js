import {useEffect, useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [tickets, setTickets] = useState();
  const [users, setUsers] = useState();
  const getData = async () => {
    try {
      const res = await fetch(
        'https://api.quicksell.co/v1/internal/frontend-assignment'
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const resJson = await res.json();
      console.log('Response', resJson);
      setTickets(resJson.tickets);
      setUsers(resJson.users);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Dashboard tickets={tickets} users={users} />
    </div>
  );
}

export default App;
