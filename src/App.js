import Navbar from "./components/navbar";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Footer from "./components/footer";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="app text-slate-900 dark:text-white duration-500">
      <Navbar handleTheme={handleTheme} theme={theme} />
      <Section1 />
      <Section2 />
      <div className="h-16 dark:bg-slate-900 bg-slate-200" id="section3"></div>
      <Section3 />
      <div className="h-16 dark:bg-slate-800 bg-slate-100" id="section4"></div>
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
