import { createContext, useContext, useEffect, useReducer } from "react";
// import { useNavigate } from "react-router-dom";

let AuthContext = createContext();

function AuthProvider({ children }) {
  //   let navigate = useNavigate();
  let initialstate = { user: null, isAuthenticated: false };
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialstate
  );
  function reducer(state, action) {
    switch (action.type) {
      case "login":
        // console.log(user, isAuthenticated);
        console.log(state, action);
        return { ...state, user: action.payload, isAuthenticated: true };
      case "logout":
        return { ...state, user: null, isAuthenticated: false };

      default:
        return;
    }
  }
  const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };
  function login(email, password) {
    // console.log(email, password);
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      console.log(email, password);
      console.log("hao");
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function logout() {
    dispatch({ type: logout });
  }

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  let context = useContext(AuthContext);
  if (context === undefined) return;
  return context;
}
export { AuthProvider, useAuth };
