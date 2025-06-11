// Define your base URL here
const BASE_URL = "https://finance-backend-32vn.onrender.com/api/v1";

// Auth endpoints
export const AUTH_API = {
    LOGIN: `${BASE_URL}/auth/login`,
    SIGNUP: `${BASE_URL}/auth/signup`,
    PROFILE: `${BASE_URL}/auth/profile`,
};

// Income endpoints
export const INCOME_API = {
    ADD: `${BASE_URL}/add-income`,
    GET: `${BASE_URL}/get-incomes`,
    DELETE: (id) => `${BASE_URL}/delete-income/${id}`, // Use function for dynamic segments
};

// Expense endpoints
export const EXPENSE_API = {
    ADD: `${BASE_URL}/add-expense`,
    GET: `${BASE_URL}/get-expenses`,
    DELETE: (id) => `${BASE_URL}/delete-expense/${id}`, // Use function for dynamic segments
};
