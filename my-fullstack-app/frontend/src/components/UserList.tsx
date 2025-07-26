import React from 'react';
import { User } from '../App';

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete }) => {
  if (users.length === 0) {
    return <p className="no-users">Пользователи не найдены</p>;
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <div className="user-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <button 
            className="delete-btn"
            onClick={() => onDelete(user.id)}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
