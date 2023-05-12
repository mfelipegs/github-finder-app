import React from "react";
import { useState } from "react";
import Search from "../components/Search";

const Home = () => {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;
