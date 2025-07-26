import { User } from '../App';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('Ошибка получения пользователей');
  }
  return response.json();
};

export const createUser = async (userData: { name: string; email: string }): Promise<User> => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    throw new Error('Ошибка создания пользователя');
  }
  
  return response.json();
};

export const deleteUser = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Ошибка удаления пользователя');
  }
};
