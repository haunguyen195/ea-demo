import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout";
import { HHMT_THEME, REMOX_THEME } from "./constants";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductSelectionPage from "./pages/ProductSelectionPage";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Layout>
          <AppStyled>
            <Routes>
              <Route exact path="/hhmt.com.au" element={<LoginPage />} />
              <Route exact path="/hhmt" element={<LoginPage defaultTheme={HHMT_THEME} />} />
              <Route exact path="/remox" element={<LoginPage defaultTheme={REMOX_THEME} />} />
              <Route exact path="/:theme/login" element={<LoginPage />} />
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
