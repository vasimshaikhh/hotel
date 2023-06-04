import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from './components/about/Abouts';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import Hotels from './components/hotel/Hotels';
import ContactUs from './components/contact/ContactUs';
import Header from './components/Fixed/header/Header';
import Error from './Error page/Error';
import SignUp from './components/profiles/beforelogin/Signup';
import SignIn from './components/profiles/beforelogin/SignIn';
import MyBooking from './components/profiles/afterlogin/MyBooking';
import MyProfile from './components/profiles/afterlogin/MyProfile';
import EditProfile from './components/profiles/afterlogin/EditProfile';




function App() {
  return <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/Gallery' element={<Gallery />}/>
      <Route path='/Hotels' element={<Hotels />}/>
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/SignUp' element={<SignUp />} /> 
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/Mybooking' element={<MyBooking />} />
      <Route path='/Myprofile' element={<MyProfile />} />
      <Route path='/EditProfile' element={<EditProfile />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>
}

export default App;
