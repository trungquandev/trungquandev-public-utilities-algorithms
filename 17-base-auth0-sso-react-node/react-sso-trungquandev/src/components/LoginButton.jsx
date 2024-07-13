// import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  // const { loginWithRedirect } = useAuth0()

  return (
    <button
      type="button"
      className="btn-common primary"
      // onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  )
}

export default LoginButton
