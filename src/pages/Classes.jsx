import Footer from "../components/layout/Footer";
import DashboardNavbar from "../components/dashboard/dashboardNavbar";
import { useState } from "react";
import DashboardFilter from "../components/dashboard/DashboardFilter";
import Card from "../components/ui/Card";

const Classes = () => {
  const [query, setQuery] = useState("");
  const navLinks = [
    {
      id: 1,
      title: "Semua Kelas",
      code: "",
    },
    {
      id: 2,
      title: "Sedang Berjalan",
      code: "INP",
    },
    {
      id: 3,
      title: "Selesai",
      code: "DONE",
    },
  ];

  const setQueryHandler = (keyword) => {
    setQuery(keyword);
  };
  return (
    <>
      <main className="m-5 p-5">
        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-20">
          <DashboardNavbar />
          <Card className="w-full">
            <DashboardFilter navData={navLinks} queries={setQueryHandler} />
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Classes;
