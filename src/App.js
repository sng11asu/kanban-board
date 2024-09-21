import {useEffect, useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [tickets, setTickets] = useState();
  const [users, setUsers] = useState();
  const getData = async () => {
    const res = await fetch(
      'https://api.quicksell.co/v1/internal/frontend-assignment'
    );
    const resJson = await res.json();
    console.log('Response', resJson);
    setTickets(resJson.tickets);
    setUsers(resJson.users);
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
