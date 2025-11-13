
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import PostPropertyPage from "./pages/PostPropertyPage";
// import PostHistoryPage from "./pages/PostHistory";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/post" element={<PostPropertyPage />} />
//         <Route path="/history" element={<PostHistoryPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostPropertyPage from "./pages/PostPropertyPage";
import PostHistory from "./pages/PostHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostPropertyPage />} />
        <Route path="/history" element={<PostHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
