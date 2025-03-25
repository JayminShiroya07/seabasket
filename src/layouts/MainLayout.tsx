import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="h-auto">
      <nav>
        <Header />
      </nav>
      <section className="w-full lg:mt-15 mt-19">
        <Outlet />
      </section>
    </div>
  );
}