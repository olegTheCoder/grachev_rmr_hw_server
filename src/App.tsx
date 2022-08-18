import { Routes, Route } from "react-router-dom";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ContentScreen from "./screens/ContentScreen/ContentScreen";
import "./App.css";
import "../src/ui-library/styles/colors.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ContentScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
