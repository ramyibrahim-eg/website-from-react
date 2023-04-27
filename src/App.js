// All Rights Reserved. © disgin.website

import React from "react";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Plans from "./pages/plans/Plans";
import NotFound from "./pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CartContextprovider from "./pages/plans/context/CartContext";
import Programs from "./pages/programs/Programs";
import ProgramsDetails from "./pages/programs/ProgramsDetails";

const LazyGallery = React.lazy(() => import("./pages/gallery/Gallery"));
const LazyAbout = React.lazy(() => import("./pages/about/About"));
const LazyTrainers = React.lazy(() => import("./pages/trainers/Trainers"));

const App = () => {
  return (
    <CartContextprovider>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/gallery"
          element={
            <React.Suspense fallback="Loading...">
              <LazyGallery />
            </React.Suspense>
          }
        />
        <Route path="/plans" element={<Plans />} />
        <Route
          path="/trainers"
          element={
            <React.Suspense fallback="Loading...">
              <LazyTrainers />
            </React.Suspense>
          }
        />
        <Route path="/programs" element={<Programs />}>
          <Route path=":progId" element={<ProgramsDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CartContextprovider>
  );
};

export default App;
