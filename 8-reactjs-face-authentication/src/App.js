/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import './App.css'

function App() {
  let faceioInstance = null

  useEffect(() => {
    const faceIoScript = document.createElement('script')
    faceIoScript.src = '//cdn.faceio.net/fio.js'
    faceIoScript.async = true
    faceIoScript.onload = () => faceIoScriptLoaded()
    document.body.appendChild(faceIoScript)

    return () => {
      document.body.removeChild(faceIoScript)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const faceIoScriptLoaded = () => {
    console.log(faceIO)
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO('your-faceio-app-public-id')
    }
  }

  // Đăng ký khuôn mặt mới vào hệ thống
  const faceRegistration = async () => {
    try {
      const userInfo = await faceioInstance.enroll({
        locale: "auto",
        payload: {
          email: "trungquandev01@gmail.com",
          userId: "170795-id-trungquandev",
          username: "trungquandev",
          website: "https://trungquandev.com"
        },
      })
      console.log(userInfo)
      console.log('Unique Facial ID: ', userInfo.facialId)
      console.log('Enrollment Date: ', userInfo.timestamp)
      console.log('Gender: ', userInfo.details.gender)
      console.log('Age Approximation: ', userInfo.details.age)
    } catch (errorCode) {
      console.log(errorCode)
      handleError(errorCode)
    }
  }

  // Xác thực một khuôn mặt đã có vào hệ thống
  const faceSignIn = async () => {
    try {
      console.log(faceioInstance)
      const userData = await faceioInstance.authenticate({
        locale: "auto",
      })
      console.log(userData)
  
      console.log('Unique Facial ID: ', userData.facialId)
      console.log('PayLoad: ', userData.payload)
    } catch (errorCode) {
      console.log(errorCode)
      handleError(errorCode)
    }
  }

  const handleError = (errCode) => {
    // Log all possible error codes during user interaction..
    // Refer to: https://faceio.net/integration-guide#error-codes
    // for a detailed overview when these errors are triggered.
    // const fioErrCode={PERMISSION_REFUSED:1,NO_FACES_DETECTED:2,UNRECOGNIZED_FACE:3,MANY_FACES:4,PAD_ATTACK:5,FACE_MISMATCH:6,NETWORK_IO:7,WRONG_PIN_CODE:8,PROCESSING_ERR:9,UNAUTHORIZED:10,TERMS_NOT_ACCEPTED:11,UI_NOT_READY:12,SESSION_EXPIRED:13,TIMEOUT:14,TOO_MANY_REQUESTS:15,EMPTY_ORIGIN:16,FORBIDDDEN_ORIGIN:17,FORBIDDDEN_COUNTRY:18,UNIQUE_PIN_REQUIRED:19,SESSION_IN_PROGRESS:20}
    switch (errCode) {
      case fioErrCode.PERMISSION_REFUSED:
        console.log("Access to the Camera stream was denied by the end user")
        break
      case fioErrCode.NO_FACES_DETECTED:
        console.log("No faces were detected during the enroll or authentication process")
        break
      case fioErrCode.UNRECOGNIZED_FACE:
        console.log("Unrecognized face on this application's Facial Index")
        break
      case fioErrCode.MANY_FACES:
        console.log("Two or more faces were detected during the scan process")
        break
      case fioErrCode.PAD_ATTACK:
        console.log("Presentation (Spoof) Attack (PAD) detected during the scan process")
        break
      case fioErrCode.FACE_MISMATCH:
        console.log("Calculated Facial Vectors of the user being enrolled do not matches")
        break
      case fioErrCode.WRONG_PIN_CODE:
        console.log("Wrong PIN code supplied by the user being authenticated")
        break
      case fioErrCode.PROCESSING_ERR:
        console.log("Server side error")
        break
      case fioErrCode.UNAUTHORIZED:
        console.log("Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information")
        break
      case fioErrCode.TERMS_NOT_ACCEPTED:
        console.log("Terms & Conditions set out by FACEIO/host application rejected by the end user")
        break
      case fioErrCode.UI_NOT_READY:
        console.log("The FACEIO Widget code could not be (or is being) injected onto the client DOM")
        break
      case fioErrCode.SESSION_EXPIRED:
        console.log("Client session expired. The first promise was already fulfilled but the host application failed to act accordingly")
        break
      case fioErrCode.TIMEOUT:
        console.log("Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)")
        break
      case fioErrCode.TOO_MANY_REQUESTS:
        console.log("Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications")
        break
      case fioErrCode.EMPTY_ORIGIN:
        console.log("Origin or Referer HTTP request header is empty or missing")
        break
      case fioErrCode.FORBIDDDEN_ORIGIN:
        console.log("Domain origin is forbidden from instantiating fio.js")
        break
      case fioErrCode.FORBIDDDEN_COUNTRY:
        console.log("Country ISO-3166-1 Code is forbidden from instantiating fio.js")
        break
      case fioErrCode.SESSION_IN_PROGRESS:
        console.log("Another authentication or enrollment session is in progress")
        break
      case fioErrCode.NETWORK_IO:
      default:
        console.log("Error while establishing network connection with the target FACEIO processing node")
        break
    }
  }

  return (
    <div className="face-authentication-by-trungquandev flex fdc jcfc aic">
      <h1>Face Authentication using ReactJS & FaceIO</h1>
      <button className="action face-registration" onClick={faceRegistration}>Face Registration</button>
      <button className="action face-sign-in" onClick={faceSignIn}>Face Sign In</button>
  
      <div className="trungquandev-author">
        <div className="flex aic gap-10 mb-7 author">
          <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-account-icon-80-80.png" />
          <span className="basis-20">Author:</span>
          <div className="basis-70">Trung Quân (aka Trungquandev)</div>
        </div>
        <div className="flex aic gap-10 mb-7 blog">
          <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2021/05/logo-trungquandev-transparent-bg-192x192-1.png" />
          <span className="basis-20">Blog:</span>
          <div className="basis-70"><a href="https://trungquandev.com" target="_blank" rel="noopener noreferrer">https://trungquandev.com</a></div>
        </div>
        <div className="flex aic gap-10 mb-7 cv">
          <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-resume-icon-80-80.png" />
          <span className="basis-20">CV:</span>
          <div className="basis-70"><a href="https://cv.trungquandev.com" target="_blank" rel="noopener noreferrer">https://cv.trungquandev.com</a></div>
        </div>
        <div className="flex aic gap-10 mb-7 youtube">
          <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-youtube-icon-96-96.png" />
          <span className="basis-20">YouTube:</span>
          <div className="basis-70"><a href="https://www.youtube.com/c/TrungquandevOfficial" target="_blank" rel="noopener noreferrer">Trungquandev Official</a></div>
        </div>
        <div className="flex aic gap-10 mb-7 facebook">
          <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-facebook-icon-96-96.png" />
          <span className="basis-20">Facebook:</span>
          <div className="basis-70"><a href="https://facebook.com/trungquandev" target="_blank" rel="noopener noreferrer">Trung Quân Dev</a></div>
        </div>
        <div className="flex aic gap-10 mb-7 refer-link">
          <img className="icon basis-10" alt="trungquandev" src="https://trungquandev.com/wp-content/uploads/2022/09/trungquandev-link-icon-94-94.png" />
          <span className="basis-20">FaceIO:</span>
          <div className="basis-70"><a href="https://faceio.net/" target="_blank" rel="noopener noreferrer">https://faceio.net</a></div>
        </div>
      </div>
    </div>
  )
}

export default App
