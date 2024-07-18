// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import PostPage from './pages/PostPage';
// import LoginPage from './pages/LoginPage';
// import Posts from './components/blog';

// import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//     <Posts/>
//    </div>
//   );
// }

// export default App;




import React from 'react';
import Posts from './components/blog';

function App() {
  return (
    <div className="App">
      <h1>My Blog Posts</h1>
      <Posts />
    </div>
  );
}

export default App;
