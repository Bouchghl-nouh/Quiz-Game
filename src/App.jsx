//App.jsx

import './App.css'
import { UserC } from './contest'
import Form from './Form'
import Quizes from './Quizes'
import Score from './Score'
function App() {
  const userContext = UserC();

  return (
    <>
      {/* {userContext.userState === "Start"?<Form/> : <Quizes/>} */}
      {userContext.userState === "Start" && <Form />}
      {(userContext.userState === "Next" && userContext.db ) && <Quizes />}
      {userContext.userState === "Finish" && <Score />}
    </>
  )
}

export default App
