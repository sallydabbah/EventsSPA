const USER = 'user';

const isLoggedIn = () => {
    return localStorage.getItem(USER) != null;
}

const getUser = () => {
    return JSON.parse(localStorage.getItem(USER));
}

const login = user => {
    localStorage.setItem(USER, JSON.stringify(user));
}

const logout = () => {
    localStorage.removeItem(USER);
}

const localStorageManager = {
    login,
    logout,
    isLoggedIn,
    getUser
};

export default localStorageManager;