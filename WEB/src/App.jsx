import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import BookCreator from "./views/BookCreator/BookCreator";
import Signup from "./views/Signup/Signup";
import MyBooks from "./views/MyBooks/MyBooks";
import DetailBook from "./views/DetailBook/DetailBook";
import Landing from "./views/Landing/Landing";

function App() {
  const location = useLocation();

  // Check if the current route path is "login"
  const isLanding = location.pathname === "/";
  return (
    <div className="App">
      {!isLanding && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
                <Route
          path="create-book"
          element={
            <ProtectedRoute>
              <BookCreator />
            </ProtectedRoute>
          }
        />
           <Route
          path="my-books"
          element={
            <ProtectedRoute>
              <MyBooks />
            </ProtectedRoute>
          }
        />
              <Route
          path="detail-book/:id"
          element={
            <ProtectedRoute>
              <DetailBook />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

