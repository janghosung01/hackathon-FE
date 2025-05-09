import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorList from "../components/MentorList";
import MentorSearch from "../components/MentorSearch";
import TitleNav from "../components/TitleNav";
import { useState } from "react";

const Home = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    area: "",
    keyword: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <>
      <Header />
      <main>
        <TitleNav />
        <MentorSearch onFilterChange={handleFilterChange} />
        <MentorList filters={filters} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
