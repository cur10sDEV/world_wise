import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./pages/ProtectedRoute";

import { Container } from "./components";
import { Cities } from "./components/Places/Cities";
import { Countries } from "./components/Places/Countries";
import { AddCity, CityInfo } from "./components/Places";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import { SpinnerFullPage } from "./components/Spinner";

// import { AppLayout } from "./layouts";
// import { Home, Product, Pricing, NotFound, Login } from "./pages";

// code-splitting - dynamic import
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Container>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="cities">
                  <Route index element={<Cities />} />
                  <Route path=":id" element={<CityInfo />} />
                </Route>
                <Route path="countries" element={<Countries />} />
                <Route path="form" element={<AddCity />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Container>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
