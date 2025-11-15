import client from './client'; // import your axios client

// Login API
export const login = async ({ email, password }) => {
  const response = await client.post('api/user/login', { email, password });
  return response.data;
};

// Register API
export const register = async ({ username, email, password }) => {
  const response = await client.post('api/user/register', { username, email, password });
  return response.data;
};

// Example: Logout API
export const logout = async () => {
  const response = await client.post('api/user/logout');
  return response.data;
};
