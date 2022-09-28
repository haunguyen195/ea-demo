import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductSelectionPage from "./pages/ProductSelectionPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Layout theme={theme}>
          <AppStyled>
            <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route
                exact
                path="/"
                element={<ProductSelectionPage theme={setTheme} />}
              />
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
