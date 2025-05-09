import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorList from "../components/MentorList";
import MentorSearch from "../components/MentorSearch";
import TitleNav from "../components/TitleNav";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <TitleNav />
        <MentorSearch />
        <MentorList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
