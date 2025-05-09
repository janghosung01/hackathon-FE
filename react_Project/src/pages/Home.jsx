import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorCard from "../components/MentorCard";
import MentorSearch from "../components/MentorSearch";
const Home = () => {
  return (
    <>
      <Header />
      <MentorSearch />
      <MentorCard />
      <Footer />
    </>
  );
};

export default Home;
