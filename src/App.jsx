import { Route, Routes } from "react-router-dom";
import { Home, Product, Pricing, NotFound, Login } from "./pages";
import { Container } from "./components";
import { AppLayout } from "./layouts";
import { Cities } from "./components/Places/Cities";
import { Countries } from "./components/Places/Countries";
import { AddCity, CityInfo } from "./components/Places";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Container>
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
        </Container>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
