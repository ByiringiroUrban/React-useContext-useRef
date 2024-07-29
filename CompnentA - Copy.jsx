import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext()

  export default  function CompnentA (props) {

    const [user, setUser] = useState("urban");


    return( 
      <div className="box">
        <h1>Component A</h1>
        <h2>{`hello ${user}`}</h2>
        <UserContext.Provider value={user}>
          <ComponentB user={user}/>
        </UserContext.Provider>
      </div>
    );
}