import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainGallery from './components/MainGallery';
import CategoriesContainer from './components/CategoriesContainer';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import AdsContent from './components/AdsContent';
import Bedrooms from './components/Bedrooms';
import { Switch, Route } from "react-router";
import React,{useState, useEffect } from "react";

function App() {
  const [categories, setCategories]=useState([])
  useEffect(()=>{
    fetch("  http://localhost:8085/categories")
    .then((res)=> res.json())
    .then((categories)=>setCategories(categories))
    console.log(categories)
  },[])
  
  return (
    <div className="App">
     <Navbar />
     <MainGallery />
     {/* <AdsContent /> */}
     <CategoriesContainer categories={categories}/>
     <Footer />
    </div>
  );
}

export default App;
