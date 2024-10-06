import { useState } from "react";
import { Link } from "react-router-dom";

import KelasList from "./KelasList";

const Kelas = () => {
  const navLinks = [
    {
      id: 1,
      title: "Semua Kelas",
      target: "#all",
    },
    {
      id: 2,
      title: "Pemasaran",
      target: "#mkt",
    },
    {
      id: 3,
      title: "Desain",
      target: "#dsg",
    },
    {
      id: 4,
      title: "Pengembangan Diri",
      target: "#sdv",
    },
    {
      id: 5,
      title: "Bisnis",
      target: "#biz",
    },
  ];

  const dataKelas = [
    {
      id: 1,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 3,
      price: "Rp 300K",
    },
    {
      id: 2,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 4,
      price: "Rp 300K",
    },
    {
      id: 3,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 4,
      price: "Rp 300K",
    },
    {
      id: 4,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 2,
      price: "Rp 300K",
    },
    {
      id: 5,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 3,
      price: "Rp 300K",
    },
    {
      id: 6,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 2,
      price: "Rp 300K",
    },
    {
      id: 7,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 5,
      price: "Rp 300K",
    },
    {
      id: 8,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 3,
      price: "Rp 300K",
    },
    {
      id: 9,
      lecturer_name: "Jenna Ortega",
      lecturer_title: "Senior Accountant di Gojek",
      title: "Big 4 Auditor Financial Analyst",
      desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      rating: 3,
      price: "Rp 300K",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(1);
  const setActiveHandler = (id) => {
    setActiveIdx(id);
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold">
        Koleksi Video Pembelajaran Unggulan
      </h1>
      <p className="text-sm">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>
      <div className="mt-5">
        <ul className="flex text-nowrap overflow-x-auto justify-start items-center gap-3">
          {navLinks.map((link) => {
            return (
              <Link
                onClick={() => setActiveHandler(link.id)}
                key={link.id}
                to={link.target}
                className={`${
                  link.id === activeIdx
                    ? "text-secondary font-bold border-b-secondary border-b-2"
                    : "text-black"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </ul>
        <KelasList data={dataKelas} />
      </div>
    </div>
  );
};

export default Kelas;
