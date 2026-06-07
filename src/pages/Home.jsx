import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Description from "../components/Description";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen">
      <Navbar />
      <Header />
      <Description />
      <Steps />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;