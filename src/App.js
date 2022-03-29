import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import FriendDetil from "./component/FriendDetil/FriendDetil";
import Friends from "./component/Friends/Friends";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route
          path="/friends/:friendId"
          element={<FriendDetil></FriendDetil>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
