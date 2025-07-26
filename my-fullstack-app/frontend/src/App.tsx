import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { getUsers, createUser, deleteUser } from './services/api';

export interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Ошибка загрузки пользователей:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (userData: { name: string; email: string }) => {
    try {
      const newUser = await createUser(userData);
      setUsers([...users, newUser]);
    } catch (error) {
      console.error('Ошибка создания пользователя:', error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Ошибка удаления пользователя:', error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Управление пользователями</h1>
        <p>Fullstack приложение с NestJS и React</p>
      </header>
      
      <main className="App-main">
        <div className="container">
          <div className="form-section">
            <h2>Добавить пользователя</h2>
            <UserForm onSubmit={handleAddUser} />
          </div>
          
          <div className="users-section">
            <h2>Список пользователей</h2>
            <UserList users={users} onDelete={handleDeleteUser} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
