export default function signIn({setUser}){

    function handleSubmit(event){
        event.preventDefault()
    fetch(" http://localhost:8085/signUp ")
    .then(response => response.json())
    .then(signUps=>setUser(signUps.find(account => {
        return(
        account.username === event.target.username.value
        && account.password === event.target.password.value
        )
       
       
}))


)

    }
    return(
        <div id="signInSection">
        
        <form id="formSignInInfo" onSubmit={handleSubmit}>
        
      <h1 id="signInh1"> SIGN IN</h1>
      <input
        id="usernameSignIn"
        type="text"
        name="username"
       
        placeholder="Username"
      />
      <input
      id="passwordSignIn"
        type="password"
        name="password"
     
        placeholder="Password"
      />
      <button id="signUpBtn" >SIGN IN</button>
      </form>
    </div>
    )

}