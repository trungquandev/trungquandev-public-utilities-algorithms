// import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = () => {
  // const { logout } = useAuth0()

  return (
    <button
      type="button"
      className="btn-common secondary"
      // onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </button>
  )
}

export default LogoutButton
