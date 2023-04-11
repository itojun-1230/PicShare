import { useState, useEffect } from 'react';
import { getUsers } from './api/data';

type UserType ={
  id: string,
  password: string
}

const App = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {

    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user: UserType) => (
          <p>{user.id}</p>
        ))}
      </ul>
    </div>
  );
};

export default App;
