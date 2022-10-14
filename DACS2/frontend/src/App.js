import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BelowHeader from "./components/BelowHeader/BelowHeader";
import { useSelector } from "react-redux";
import routes from "./config/routes";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Introduce from "./Pages/introduce/Introduce";
import NewProduct from "./Pages/newProduct/newProduct";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ScrollToTop from "./components/ScrollTotop";
import News from "./Pages/news/News";
import Contact from "./Pages/Contact/Contact";
import ProductAll from "./Pages/ProductAll/ProductAll";
import ProductFruit from "./Pages/ProductFruit/ProductFruit";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Layout>
          <Routes>
            {/* home */}
            <Route index path={routes.home} element={<Home />} />
            {!user && (
              <>
                {/* login */}
                <Route
                  path={routes.login}
                  element={
                    <>
                      <BelowHeader />
                      <Login />
                    </>
                  }
                />
                {/* register */}
                <Route
                  path={routes.signup}
                  element={
                    <>
                      <BelowHeader />
                      <Signup />
                    </>
                  }
                />
              </>
            )}
            {/* Introduce */}
            <Route
              path={routes.introduce}
              element={
                <>
                  <BelowHeader />
                  <Introduce />
                </>
              }
            />
            {/* news */}
            <Route
              path='/news'
              element={
                <>
                  <BelowHeader />
                  <News />
                </>
              }
            />
            <Route
              path='new-product'
              element={
                <>
                  <BelowHeader />
                  <NewProduct />
                </>
              } 
            />
            <Route
              path='contact'
              element={
                <>
                  <BelowHeader />
                  <Contact />
                </>
              } 
            />
            <Route
              path='product-all'
              element={
                <>
                  <BelowHeader />
                  <ProductAll />
                </>
              } 
            />
            <Route
              path='product-fruit'
              element={
                <>
                  <BelowHeader />
                  <ProductFruit />
                </>
              } 
            />
            <Route
              path='/product/:id'
              element={
                <>
                  <BelowHeader />
                  <ProductPage />
                </>
              } 
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
