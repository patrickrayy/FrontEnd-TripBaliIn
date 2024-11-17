// import React from "react";

// const Login = () => {
//     const styles = {
//         container: {
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "1512px",
//           height: "982px",
//           margin: "0 auto",
//           padding: "250px",
//           background: "linear-gradient(to bottom, #433878, #7E60BF, #E4B1F0)",
//         },
//         logoSection: {
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px",
//           width: "50%",
//         },
//         logoFirstImage: {
//           width: "190px",
//           height: "auto",
//           transform: "translateX(-100px)",
//         },
//         logoSecondImage: {
//           width: "170px",
//           height: "auto",
//           transform: "translateX(-100px)",
//         },
//         box: {
//           width: "50%",
//           background: "#fff",
//           padding: "40px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//           color: "#6750A4",
//           borderRadius: "10px",
//         },
//         heading: {
//           fontSize: "48px",
//           textAlign: "center",
//         },
//         inputBox: {
//           position: "relative",
//           width: "100%",
//           margin: "30px 0",
//         },
//         input: {
//           width: "100%",
//           padding: "10px 15px",
//           border: "1px solid #ccc",
//           borderRadius: "8px",
//           fontSize: "16px",
//         },
//         button: {
//           width: "100%",
//           height: "45px",
//           background: "#6750A4",
//           color: "#fff",
//           border: "none",
//           outline: "none",
//           borderRadius: "40px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
//           cursor: "pointer",
//         },
//         registerLink: {
//           textAlign: "center",
//           marginTop: "20px",
//         },
//         registerLinkText: {
//           color: "grey",
//           textDecoration: "none",
//           fontWeight: "600",
//         },
//         socialLogin: {
//           textAlign: "center",
//           marginTop: "20px",
//         },
//         socialLoginText: {
//           fontSize: "18px",
//           color: "grey",
//         },
//         socialLoginButton: {
//           height: "45px",
//           background: "#fff",
//           border: "1px solid #ccc",
//           outline: "none",
//           borderRadius: "40px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
//           cursor: "pointer",
//           fontWeight: "500",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           margin: "10px 10px",
//           flex: "1",
//           maxWidth: "45%",
//         },
//         googleButton: {
//           color: "#db4437",
//         },
//         linkedinButton: {
//           color: "#0077b5",
//         },
//       };

//   return (
//     <div className="login-container">
//       {/* Logo Section */}
//       <div className="logo-section">
//         <img src="/assets/images/tripbaliin.png" alt="tripbaliin" />
//       </div>

//       {/* Login Form */}
//       <div className="box">
//         <form>
//           <h1>Login</h1>

//           {/* Email or Username Input */}
//           <div className="input-box">
//             <h6>Email or Username</h6>
//             <input
//               type="text"
//               placeholder="Enter your email"
//               required
//             />
//             <i className="bx bxs-user"></i>
//           </div>

//           {/* Password Input */}
//           <div className="input-box">
//             <h6>Password</h6>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               required
//             />
//             <i className="bx bxs-lock"></i>
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="remember-forgot">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="#">Forgot password?</a>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="btn">
//             Login
//           </button>

//           {/* Register Link */}
//           <div className="register-link">
//             <p>
//               Don't have an account? <a href="#">Register</a>
//             </p>
//           </div>

//           {/* Social Login Section */}
//           <div className="social-login">
//             <p>OR</p>
//             <div className="social-login-buttons">
//               <button type="button" className="btn google">
//                 <img
//                   src="../images/googleicon.png"
//                   alt="Google Logo"
//                   width="40"
//                 />{" "}
//                 Sign in with Google
//               </button>
//               <button type="button" className="btn facebook">
//                 <img
//                   src="../images/linkedinicon.png"
//                   alt="Facebook Logo"
//                   width="40"
//                 />
//                 Sign in with Facebook
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
