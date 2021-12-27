// import {
//   Redirect,
//   useHistory,
//   Switch,
//   Route,
//   useRouteMatch,
// } from "react-router-dom";

// // react-router-dom v5 : Redirect and useHistory()
// // v5: useRouteMatch() and match.path() for nesting Routes or match.url() for nesting Links
// // react-router-dom v6 : Navigate and useNavigate()
// // v6: /* in root component path and provide path for nested Route or Link

// function Post() {
//   const status = 200;
//   //   const status = 404;
//   let history = useHistory();
//   let match = useRouteMatch();

//   const handleClick = () => {
//     console.log("hello");
//     history.push("/about");
//   };

//   if (status === 404) {
//     return <Redirect to="/notfound" />;
//   }

//   return (
//     <div>
//       <h1>Post</h1>
//       <button onClick={handleClick}>Click Here!</button>
//       <Switch>
//         <Route path={`${match.path}/show`}>
//           <h1>show post</h1>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default Post;
