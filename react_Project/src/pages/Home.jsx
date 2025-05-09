import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorCard from "../components/MentorCard";
import MentorSearch from "../components/MentorSearch";
import TitleNav from "../components/TitleNav";
const Home = () => {
  return (
    <>
      <Header />
      <TitleNav />
      <MentorSearch />
      <MentorCard />
      <Footer />
    </>
  );
};

export default Home;
