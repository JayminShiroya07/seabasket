import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="h-auto">
      <nav>
        <Header />
      </nav>
      <section className="w-full lg:mt-15 mt-19">
        <Outlet />
      </section>
      {location.pathname !== "/login" ? (
        <section>
          <Footer />
        </section>
      ) : undefined }
    </div>
  );
}
