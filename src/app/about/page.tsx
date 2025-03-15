// app/services/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/NewsletterSignup";
import AboutPage from "@/pages/AboutPage";

export default function AboutRoute() {
  return (
    <div>
      <Navbar />
      <AboutPage/>
      <Newsletter/>
      <Footer />
    </div>
  );
}
