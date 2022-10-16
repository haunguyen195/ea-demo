import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout";
import { HHMT_THEME, REMOX_THEME } from "./constants";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductSelectionPage from "./pages/ProductSelectionPage";
import { HHMT_PREFIX } from "./router/routePath";

const AppContainer = () => {
  return (
    <AppContainerStyled>
      <Layout>
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route
                exact
                path={HHMT_PREFIX}
                element={<LoginPage defaultTheme={HHMT_THEME} />}
              />
              <Route
                exact
                path="/remox"
                element={<LoginPage defaultTheme={REMOX_THEME} />}
              />
              <Route exact path="/:theme/login" element={<LoginPage />} />
              <Route exact path="/" element={<ProductSelectionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Layout>
    </AppContainerStyled>
  );
};

const App = () => {
  return <AppContainer />;
};

const AppContainerStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-header);
`;
export default App;
