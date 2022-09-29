import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ProductSelectionPage from "./pages/ProductSelectionPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Layout>
          <AppStyled>
            <Routes>
              <Route exact path="/hhmt/login" element={<LoginPage />} />
              <Route exact path="/remox/login" element={<LoginPage />} />
              <Route exact path="/fefx/login" element={<LoginPage />} />
              <Route
                exact
                path="/"
                element={<ProductSelectionPage />}
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </AppStyled>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  height: 70vh;
  width: 100%;
  background-color: var(--bg-header);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default App;
