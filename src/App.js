import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainGallery from './components/MainGallery';
import CategoriesContainer from './components/CategoriesContainer';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import AdsContent from './components/AdsContent';
import Bedrooms from './components/Bedrooms';
import LivingRooms from './components/LivingRooms';
import Restrooms from './components/Restrooms';
import Kitchens from './components/Kitchens';
import Offices from './components/Offices';
import KidsBedrooms from './components/KidsBedrooms';
import Balcony from './components/Balcony';
import CoffeCorner from './components/CoffeCorner';
import CustomFurniture from './components/CustomFurniture';
import Facebook from "./components/Facebook";
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import { Switch, Route } from "react-router";
import SignIn from './components/SignIn';


import React,{useState, useEffect } from "react";
import Instagram from './components/Instagram';
import SignInForm from './components/SignUp';

function App() {
  const [user, setUser] =useState({})
 
  const [categories, setCategories]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:8085/categories")
    .then((res)=> res.json())
    .then((categories)=>setCategories(categories))
    console.log(categories)
  },[])
  
const [bedrooms, setBedrooms]= useState([])
useEffect(()=>{
    fetch(" http://localhost:8085/bedrooms")
    .then((res)=> res.json())
    .then((bedrooms)=>setBedrooms(bedrooms))
    console.log(bedrooms)
  },[])
  const [kitchens, setKitchens]= useState([])
  useEffect(()=>{
      fetch(" http://localhost:8085/kitchens")
      .then((res)=> res.json())
      .then((kitchens)=>setKitchens(kitchens))
      console.log( kitchens)
    },[])
    const [balconies, setBalconies]= useState([])
    useEffect(()=>{
        fetch(" http://localhost:8085/balcony")
        .then((res)=> res.json())
        .then((balconies)=>setBalconies(balconies))
        console.log(balconies)
      },[])
     
        const [corners, setCorners]= useState([])
    useEffect(()=>{
        fetch(" http://localhost:8085/coffeCorner")
        .then((res)=> res.json())
        .then((corners)=>setCorners(corners))
        console.log(corners)
      },[])
      const [kidsBedrooms, setKidsBedrooms]= useState([])
      useEffect(()=>{
          fetch(" http://localhost:8085/kidsBedrooms")
          .then((res)=> res.json())
          .then((kidsBedrooms)=>setKidsBedrooms(kidsBedrooms))
          console.log(kidsBedrooms)
        },[])
        const [livingrooms, setLivingRooms]= useState([])
        useEffect(()=>{
           fetch(" http://localhost:8085/livingrooms")
           .then((res)=> res.json())
           .then((livingrooms)=>setLivingRooms(livingrooms))
           console.log(livingrooms)
         },[])
         const [offices, setOffices]= useState([])
        useEffect(()=>{
    fetch(" http://localhost:8085/offices")
    .then((res)=> res.json())
    .then((offices)=>setOffices(offices))
    console.log(offices)
  },[])
  const [restrooms, setRestrooms]= useState([])
  useEffect(()=>{
      fetch("http://localhost:8085/restrooms")
      .then((res)=> res.json())
      .then((restrooms)=>setRestrooms(restrooms))
      console.log(restrooms)
    },[])
    const [infos, setInfo] = useState([])
    const [currentUser, setCurrentUser] = useState({ email: "", password: "" })
    const [messages,setMessages] =useState([])
    useEffect(() =>{
      fetch("  http://localhost:8085/contactUs")
      .then((res) => res.json())
      .then((messages)=>setMessages(messages))
      console.log(messages)
    },[])
  return (
    <div className="App">
     <Navbar user={user} />
    

     <MainGallery />
     <Route path="/contactUs">
            <ContactUs setMessages={setMessages}/>
           </Route>
     <Route path="/signUp">
     <SignUp setInfo={setInfo} setCurrentUser={setCurrentUser} currentUser={currentUser} />
     </Route>

     <Route path="/signIn">
      <SignIn setUser={setUser}  user={user}/>
     </Route>
    
     <Switch>
      <Route exact path="/">
     <CategoriesContainer categories={categories}/>
     </Route>
      <Route path="/bedrooms">
        <Bedrooms bedrooms={bedrooms} />
      </Route>
      <Route path="/balcony">
        <Balcony balconies={balconies} />
      </Route>
      <Route path="/corners">
        <CoffeCorner corners={corners} />
      </Route>
      <Route path="/kidsBedrooms">
        <KidsBedrooms kidsBedrooms={kidsBedrooms}/>
      </Route>
      <Route path="/kitchens">
        <Kitchens kitchens={kitchens} />
      </Route>
      <Route path="/livingrooms">
        <LivingRooms livingrooms={livingrooms} />
      </Route>
      <Route path="/offices">
        <Offices offices={offices} />
      </Route>
      <Route path="/restrooms">
        <Restrooms restrooms={restrooms} />
      </Route>
      <Route path="/instagram">
        <Instagram />
      </Route>
      <Route path="/facebook">
        <Facebook />
      </Route>

      </Switch>
      <CustomFurniture />
     

     <Footer />
     
   
    </div>
  );
}

export default App;

