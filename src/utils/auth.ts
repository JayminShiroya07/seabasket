export const isAuthenticated = () => {
    return !!localStorage.getItem("AuthToken");
}