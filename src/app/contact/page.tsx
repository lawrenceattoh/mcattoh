// app/services/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/pages/ContactPage";

export default function ContactRoute() {
  return (
    <div>
      <Navbar />
     <ContactPage/>
      <Footer />
    </div>
  );
}
