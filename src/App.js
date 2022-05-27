import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ProgressBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                key="home"
                numberOfItems={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key="business"
                numberOfItems={pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                numberOfItems={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                key="general"
                numberOfItems={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                key="health"
                numberOfItems={pageSize}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                key="science"
                numberOfItems={pageSize}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                key="sports"
                numberOfItems={pageSize}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                numberOfItems={pageSize}
                category="technology"
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
