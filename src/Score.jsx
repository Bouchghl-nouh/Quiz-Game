import { UserC } from './contest'
export default function Score() {
     const userContext = UserC();

  return (
    <>
          <h2>Congratulations you finished The Quiz Mr { userContext.username}</h2>
     <p>Your Score Is : <strong>{userContext.result}</strong> </p>
    </>
  )
}