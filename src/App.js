import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName, setUserLogin } from "./features/user/userSlice";
import Detail from "./components/Detail";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebaseConfig";

function App() {
  const user = useSelector(selectUserName);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
