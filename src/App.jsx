import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { AuthProvider } from "./providers/auth-context";
import Navbar from "./components/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/footer";
import Restaurants from "./pages/restaurants";
import RestaurantDetails from "./pages/restaurant-details";
import OrderSummary from "./pages/order-summary";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/restaurants/:id" element={<RestaurantDetails />} />
              <Route path="/ordersummary" element={<OrderSummary />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
