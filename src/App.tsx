import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Home.tsx";
import About from "./pages/About/About us/About.tsx";
import Donations from './components/Donations/Donations.tsx';
import Vision from "./pages/About/Vision/Vision.tsx";
import Career from "./pages/About/Career/Career.tsx";
import Feedback from "./pages/About/Feedback Form/Feedback.tsx";
import History from "./pages/About/History1/History.tsx";
import Mission from "./pages/About/Mission/Mission.tsx";
import Partner from "./pages/About/Partner/Partner.tsx";
import Standards from "./pages/About/Standards/Standards.tsx";
import Volunteer from "./pages/About/Volunteer/Volunteer.tsx";
import Bank from "./pages/How to Donate/Bank Details/Bank.tsx";
import Donor from './pages/How to Donate/Become Regular Donor/Donor.tsx'
import Orphan from './pages/How to Donate/Sponsor an Orphan/Orphan.tsx'
import Projects from './pages/How to Donate/Sponsor Project/Project.tsx'
import Blood from "./pages/Our Projects/Blood Donation/Blood.tsx";
import Dastkari from "./pages/Our Projects/Dastkari/Dastkari.tsx";
import Education from "./pages/Our Projects/Education/Education.tsx";
import Health from "./pages/Our Projects/Health/Health.tsx";
import Natural from "./pages/Our Projects/Natural Disaster/Natural.tsx";
import Ramadan from "./pages/Our Projects/Ramadan/Ramadan.tsx";
import Social from "./pages/Our Projects/Social Buisness/Social.tsx";
import Winter from "./pages/Our Projects/Winter Drive/Winter.tsx";
import Blog from "./pages/Stories/Blogs/Blogs.tsx";
import Live from "./pages/Stories/Live Impact Tracker/Live.tsx";
import People from "./pages/Stories/Stories of People/People.tsx";
import Experience from "./pages/Stories/Volunteer Experience/Experience.tsx";
import Changed from "./pages/Stories/Whose Lives Have Changed/Changed.tsx";
import WorkUs from "./pages/About/WhyWorkWithUs/WorkUs.tsx";
import FUWFVerificationPortal from './pages/FUWP Verification/Verification.tsx';
import Our_Projects from "./pages/Our Projects/Our Projects/Our _Projects.tsx";
import DonationJar from "./pages/Stories/DonationJar/DonationJar.tsx";
function App() {  
  return (
    <BrowserRouter>
      {/* Navbar should stay outside Routes */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />


        {/* Donations Page */}
        <Route path="/Donations" element={<Donations />} />

        <Route path="/About" element={<About />} />

        <Route path="/vision" element={<Vision />} />
        
        <Route path="/Career" element={<Career />} />

        <Route path="/Feedback" element={<Feedback />} />

        <Route path="/History" element={<History />} />

        <Route path="/Mission" element={<Mission />} />

        <Route path="/Partner" element={<Partner />} />

        <Route path="/Standards" element={<Standards />} />

        <Route path="/Volunteer" element={<Volunteer />} />

        <Route path="/Bank" element={<Bank />} />
        
        <Route path="/Donor" element={<Donor />} />

        <Route path="/Orphan" element={<Orphan />} />

        <Route path="/Projects" element={<Projects />} />

        <Route path="/Blood" element={<Blood />} />

        <Route path="/Dastkari" element={<Dastkari />} />

        <Route path="/Education" element={<Education />} />

        <Route path="/Health" element={<Health />} />

        <Route path="/Natural" element={<Natural />} />

        <Route path="/Ramadan" element={<Ramadan />} />

        <Route path="/Social" element={<Social />} />

        <Route path="/Winter" element={<Winter />} />
        
        <Route path="/Blog" element={<Blog />} />

        <Route path="/Live" element={<Live />} />

        <Route path="/People" element={<People />} />

        <Route path="/Experience" element={<Experience />} />

        <Route path="/Changed" element={<Changed />} />

        <Route path="/WorkUs" element={<WorkUs />} />

        <Route path="/Our_Projects" element={<Our_Projects/>} />

        <Route
  path="/stories/DonationJar"
  element={
    <DonationJar
      goalAmount={500000}
      initialRaisedAmount={120000}
    />
  }
/>



        <Route path="/FUWFVerificationPortal" element={<FUWFVerificationPortal/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
