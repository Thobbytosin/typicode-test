import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Route path="/about" element={<About />} />
<Route element={<PrivateRoute />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>
<Route path="/projects" element={<Projects />} />
<Route path="/sign-in" element={<SignIn />} />
<Route path="/sign-up" element={<SignUp />} />
<Route element={<AdminPrivateRoute />}>
  <Route path="/create-post" element={<CreatePost />} />
  <Route path="update-post/:postId" element={<UpdatePost />} />
</Route>
<Route path="/post/:postSlug" element={<PostPage />} />
<Route path="/search" element={<Search />} /> */
}
