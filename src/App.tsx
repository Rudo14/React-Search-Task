import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/productContext";
import ProductContainer from "./containers/ProductContainer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductContainer />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
