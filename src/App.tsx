import Gst from "@/components/docs/Gst";
import Noc from "@/components/docs/Noc";
import PlayBoy from "@/components/docs/PlayBoy";
import GovermentStamp from "@/components/docs/Stamp";
import Tds from "@/components/docs/Tds";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import JoiningLetterGenerator from "./components/docs/JoiningLetter";
import PoliceClearance from "./components/docs/PoliceVerification";
import StudentEnquiryFormGenerator from "./components/docs/StudentEnquiry";
import { Home } from "./pages/Home";
import VoterIDVerificationGenerator from "./components/docs/VoterIDVerification";
import CyberSecurityGenerator from "./components/docs/CyberSecurity";
import ReferenceVerificationForm from "./components/docs/ReferenceVerification";
import NoObjectionCertificateGenerator from "./components/docs/Noc2";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playboy" element={<PlayBoy />} />
      <Route path="/stamp" element={<GovermentStamp />} />
      <Route path="/gst" element={<Gst />} />
      <Route path="/tds" element={<Tds />} />
      <Route path="/noc" element={<Noc />} />

      {/* <Route path="/card-verification" element={<CardVerification />} />
      <Route path="/medical-kit" element={<MedicalKit />} /> */}

      <Route path="cyber-security" element={<CyberSecurityGenerator />} />
      <Route path="/police-verification" element={<PoliceClearance />} />
      <Route path="/reference-and-address" element={<ReferenceVerificationForm />} />
      <Route path="/joining-letter" element={<JoiningLetterGenerator />} />
      <Route path="/student-enquiry" element={<StudentEnquiryFormGenerator />} />
      <Route path="voter-id-verification" element={<VoterIDVerificationGenerator />} />
      <Route path="/noc-2" element={<NoObjectionCertificateGenerator />} />
    </Routes>
  </Router>
);

export default App;