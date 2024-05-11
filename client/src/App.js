import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailPost from "./pages/DetailPost";
import DashBoard from "./admin/DashBoard";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import EditPost from "./admin/EditPost";
import CreatePost from "./admin/CreatePost";
import { updatePost as apiUpdatePost } from "./api/postAPI"; // import the updatePost function from the API module
import CreateUser from "./admin/CreateUser";
import SearchResults from "./pages/SearchResults";

function App() {
  function updatePost(post) {
    apiUpdatePost(post.id, post)
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <Router>
      <Navbar />
   
      <Routes>
        <Route path="/post/:id" element={<DetailPost />} />
        <Route path="/admin" element={<DashBoard />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/edit-posts/:id"
          element={<EditPost onUpdate={updatePost} />}
        />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
