import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SinglePostPage from "./pages/SinglePostPage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ContentItem from "./pages/ContentItem";
import ContentEdit from "./pages/ContentEdit";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  function updatePost(post) {
    fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/post/:id" element={<SinglePostPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/post/:id" element={<ContentItem />} /> */}
        <Route
          path="/edit-post/:id"
          element={<ContentEdit onUpdate={updatePost} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
