import React from "react";
import "./index.css";
import contacts from "./contacts";
import posts from "./posts";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import info from "./userprofiledata";


function App() {
  return (<>
  <header className="header">
<NavBar/>
</header>
  <main>
    
<section className="userprofile/post-section">
<UserProfile info={info}/>
<Posts posts={posts}/>
</section>
<section className="contact-section">
<Contacts contacts={contacts}/>
</section>
  </main>


  </>)
}

export default App;
