// Author: TrungQuanDev | https://youtube.com/@trungquandev
import ReactJson from 'react-json-view'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="user-from-auth0">
        <div className="title">User from Auth0:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img className="user-avatar" src={'https://trungquandev.com/wp-content/uploads/2024/03/white-bg-main-avatar-circle-min-trungquandev-codetq-375.jpeg'} alt={'trungquandev'} />
          <div className="user-info">
            <p>Sub: <span className="value">google-oauth2|108184243235574894333</span></p>
            <p>Email: <span className="value">trungquandev@gmail.com</span></p>
            <p>Name: <span className="value">TrungQuanDev</span></p>
          </div>
        </div>
        <div className="more-info">
          <ReactJson
            enableClipboard={false}
            collapsed={true}
            theme={'google'}
            src={{
              "given_name": "Ragdoll",
              "family_name": "Cats",
              "nickname": "quanlightning2",
              "name": "TrungQuanDev",
              "picture": "https://trungquandev.com/wp-content/uploads/2024/03/white-bg-main-avatar-circle-min-trungquandev-codetq-375.jpeg",
              "updated_at": "2024-07-10T09:59:37.603Z",
              "email": "quanlightning2@gmail.com",
              "email_verified": true,
              "sub": "google-oauth2|108184243235574894333"
            }}
          />
        </div>
      </div>

      <div className="user-from-our-database">
        <div className="title">User from our database:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img className="user-avatar" src={'https://trungquandev.com/wp-content/uploads/2024/03/white-bg-main-avatar-circle-min-trungquandev-codetq-375.jpeg'} alt={'trungquandev'} />
          <div className="user-info">
            <p>ID: <span className="value">random-108184243235574894333</span></p>
            <p>Email: <span className="value">trungquandev@gmail.com</span></p>
            <p>Name: <span className="value">TrungQuanDev</span></p>
          </div>
        </div>
        <div className="more-info">
          <ReactJson
            enableClipboard={false}
            collapsed={true}
            theme={'google'}
            src={{
              "given_name": "Ragdoll",
              "family_name": "Cats",
              "nickname": "quanlightning2",
              "name": "TrungQuanDev",
              "picture": "https://trungquandev.com/wp-content/uploads/2024/03/white-bg-main-avatar-circle-min-trungquandev-codetq-375.jpeg",
              "updated_at": "2024-07-10T09:59:37.603Z",
              "email": "quanlightning2@gmail.com",
              "email_verified": true,
              "sub": "google-oauth2|108184243235574894333"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
