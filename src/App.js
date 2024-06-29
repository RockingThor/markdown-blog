import { createContext, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import Terraform from "./components/Terraform";

// Create Context
export const ThemeContext = createContext();

function App() {
    const [isDark, setIsDark] = useState(true);

    const value = {
        isDark,
        setIsDark,
    };

    return (
        <ThemeContext.Provider value={value}>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/day/:id"
                    element={<DetailPage />}
                />
                <Route
                    path="/terraform/day/:id"
                    element={<Terraform />}
                />
            </Routes>
        </ThemeContext.Provider>
    );
}

export default App;
