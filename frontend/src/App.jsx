
import './App.css';
import MyNavbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landingpage from './Pages/Landing';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Courses from './Pages/Courses';
import About from './Pages/About';
import DocsReviews from './Pages/Docs';
import SignUp from './Pages/Signuppage';
import SignInPage from './Pages/Signinpage';
 import PrivateRoute from "./components/PrivateRoute";
 import Dashboard from "./Pages/Dashboard"; 


function App() {
  const location = useLocation();
  const hideFooterPaths = ["/signin", "/signup"];
  const hideNavbar = ["/signin", "/signup"].includes(location.pathname.toLowerCase());
  const hideFooter = hideFooterPaths.includes(location.pathname.toLowerCase());



  return (
    <>
      {!hideNavbar && <MyNavbar />}
      {/* <Landingpage></Landingpage>  */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/About" element={<About />} />
        <Route path="/Docs" element={<DocsReviews />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignInPage />} />
         <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> 

      </Routes>


      {!hideFooter && <Footer />}
    </>
  );
}

export default App;

