//Contest.jsx
import { createContext, useState, useContext,useEffect } from "react";


const UserContext = createContext();

export const UserProvider = (({ children })=>{
    const [username, setUsername] = useState('')
    const [userState, setUserState] = useState('Start')
    const [counter, setCounter] = useState(0)
    const [result, setResult] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [db, setDb] = useState({})
      useEffect(() => {
        fetch("/DB/db.json?url")
          .then((response) => response.json())
            .then((data) => {
            setDb(data);
          });
      }, []);
    return(
        <UserContext.Provider 
        value={{
            username,
            setUsername,
            counter,
            setCounter,
            userState,
                setUserState,
                result,
                setResult,
                selectedOption,
                setSelectedOption,
                db,
            setDb
        }}
        >
            
            {children}
        </UserContext.Provider>
    )
})

export const UserC = ()=>{
    const Context = useContext(UserContext)
    if(!Context){
        console.log('context not found')
    }
    return Context
}