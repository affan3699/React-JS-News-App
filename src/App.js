import * as React from "react";
import "./App.css";
import MultiActionAreaCard from "./components/MultiActionAreaCard";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import axios from "axios";
import { Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import TopHeadlines from "./Pages/TopHeadlines";
import NotFound from "./Pages/NotFound";
import Technology from "./Pages/Techology";
import Sports from "./Pages/Sports";
import Entertainment from "./Pages/Entertainment";
import Business from "./Pages/Business";
import Science from "./Pages/Science";
import Health from "./Pages/Health";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TopHeadlines />} />
        <Route path="Technology" element={<Technology />} />
        <Route path="Sports" element={<Sports />} />
        <Route path="Business" element={<Business />} />
        <Route path="Science" element={<Science />} />
        <Route path="Health" element={<Health />} />
        <Route path="Entertainment" element={<Entertainment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
