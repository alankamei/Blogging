import "./App.css";
import { Route, Routes } from "react-router-dom";
import Headers from "./Header";
import Post from "./Post";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Routes>
    <Route path="/" element={ <Layout/> }>
      <Route index element={<IndexPage/>} />
      <Route path={'/login'} element={<div>log in page</div>} />
    </Route>
    </Routes>
  );
}

export default App;
