
import React, {useState, useEffect, useRef} from "react";

 export default function MyComponentUseRef(){
        // let [number, setNumber] = useState(0);

        // by using useRef

        const inputRef = useRef(null);
        const inputRef2 = useRef(null);
        const inputRef3 = useRef(null);

        useEffect(() => {
           console.log("component rendered");
        });

      function handleClick(){
        // setNumber(n => n + 1);

       inputRef.current.focus();
       inputRef.current.style.backgroundColor = "orange";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "";
        
      }

      function handleClick2(){
        // setNumber(n => n + 1);

       inputRef2.current.focus();
       inputRef.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "green";
       inputRef3.current.style.backgroundColor = "";
        
      }

      function handleClick3(){
        // setNumber(n => n + 1);

       inputRef3.current.focus();
       inputRef.current.style.backgroundColor = "";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "blue";
        
      }

  return(
      <div>
          <button onClick={handleClick}>
            Click me!
          </button>
          <input ref={inputRef} /><br /><br />

          <button onClick={handleClick2}>
            Click me2!
          </button>
          <input ref={inputRef2} /><br /><br />

          <button onClick={handleClick3}>
            Click me3!
          </button>
          <input ref={inputRef3} />
      </div>

  );
}