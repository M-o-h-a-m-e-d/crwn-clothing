import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/routes/nav/nav.component";
import SignIn from "./components/routes/sign-in/sign-in.component";
function Shop() {
  return <h1>Hello from Shop</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
