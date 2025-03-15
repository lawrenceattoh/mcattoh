// app/services/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkPage from "@/pages/WorkPage";

export default function WorkRoute() {
  return (
    <div>
      <Navbar />
<WorkPage/>
      <Footer />
    </div>
  );
}
