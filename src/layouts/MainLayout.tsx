import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useAppDispatch } from "../store/slices";
import { checkLogin } from "../store/slices/userSlice";

export default function MainLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  const location = useLocation();
  return (
    <div className="h-auto">
      <nav>
        <Header />
      </nav>
      <section className="w-full lg:mt-15 mt-19">
        <Outlet />
      </section>
      {location.pathname !== "/login" &&
      location.pathname !== "/signup" &&
      !location.pathname.includes("/my") ? (
        <section>
          <Footer />
        </section>
      ) : undefined}
    </div>
  );
}
