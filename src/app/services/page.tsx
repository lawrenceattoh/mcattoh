// app/services/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesNav from "@/pages/ServicesNav";
import Newsletter from "@/components/NewsletterSignup";

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <ServicesNav />
      <Newsletter/>
      <Footer />
    </div>
  );
}
