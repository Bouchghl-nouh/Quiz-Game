import { UserC } from './contest'
export default function Form() {
     const userContext = UserC();
  function handleClick(event) {
      event.preventDefault();
      if (userContext.username === "") {
          return userContext.setUserState("Start")
      }
    userContext.setUserState("Next");
}
  return (
    <>
      <h2>Start The Quiz</h2>
      <form>
        <input type='text' placeholder='UserName' value={userContext.username} onChange={(event)=> userContext.setUsername(event.target.value)} />    
        <button onClick={handleClick}>{userContext.userState} </button>
    </form>
    </>
  )
}