// Створення middleware
const tokenMiddleware = store => next => action => {
  // Отримати токен з куки
  const token = document.cookie.split('=')[1];

  // Додати токен до заголовків кожного запиту
  if (token) {
    action.headers = {
      ...action.headers,
      'Authorization': 'Bearer ' + token,
    };
  }

  return next(action);
};

export default tokenMiddleware;