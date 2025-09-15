import {useState , useRef , useEffect , useCallback} from "react";



function Passgen() {
   const [length , setLength]=useState(8);
   const [numberAllowed , setNumberAllowed]=useState(false);
   const[charAllowed , setCharAllowed]=useState(false);
   const [password , setPassword]=useState("");

   const passwordRef=useRef(null);

   const generatePassword=useCallback(()=>{
    let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed)chars+="0123456789";
    if(charAllowed)chars+="!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password="";

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*chars.length);
        password+=chars[randomIndex];


    }

    setPassword(password);

   } ,[length , numberAllowed , charAllowed])




   useEffect(()=>{
       generatePassword();
   }, [generatePassword])

   const copyPasswordToClipboard=useCallback(()=>{
    if(passwordRef.current){
        passwordRef.current.select();
        window.navigator.clipboard.writeText(password);
        alert("password copied to clipboard");

        

    }
   },[password])


    return (

    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>

)
}

export default Passgen 