import React from 'react';
import './App.css';
import { NavbarComp } from "./component/navbarGrid";
import { HeaderComp } from "./component/HeaderGrid";
import { Switch , Route , Redirect } from "react-router-dom";
import home from './component/home.png';
import cource from './component/cource.jpg';
import faq from './component/faq.png';
import management from './component/management.png';
import about from './component/about.png';
// import contact from './component/contact.jpg';
// import { Contact } from "./component/Contact";
function App() {
  return (
    <>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <NavbarComp />
            <Switch>
            <Route exact path ='/' render={() => <HeaderComp btn_name = {'Apply Now'} image = {home} />} />
            <Route exact path ='/cources' render={() => <HeaderComp btn_name = {'Enroll Now'} image = {cource} />} />
            <Route exact path ='/faq' render={() => <HeaderComp btn_name = {'Learn More'} image = {faq} />}  />
            <Route exact path ='/management' render={() => <HeaderComp btn_name = {'Contact Us'} image = {management} />} />
            <Route exact path ='/aboutus' render={() => <HeaderComp btn_name = {'Contact Us'} image = {about} />}  />
            {/* <Route exact path ='/contactus' render={() => <Contact btn_name = {'Submit'} image = {contact} />}  /> */}


            <HeaderComp />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
