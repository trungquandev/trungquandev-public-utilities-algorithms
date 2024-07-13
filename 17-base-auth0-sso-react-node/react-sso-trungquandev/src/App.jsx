// Author: TrungQuanDev | https://youtube.com/@trungquandev
import './App.css'
import Dashboard from './pages/Dashboard'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {
  return (
    <div className="app-container">
      <div className="fixed-box">
        <h1>Auth0 SSO | TrungQuanDev</h1>
        <div className="actions">
          {/* 2 Button Login và Logout tùy điều kiện hiển thị */}
          <LoginButton />
          <LogoutButton />
        </div>
        {/* Phần dashboard sau khi đăng nhập */}
        <Dashboard />
      </div>      
    </div>
  )
}

export default App
