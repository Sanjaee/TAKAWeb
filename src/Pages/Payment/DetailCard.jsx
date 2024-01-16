import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Utils/Firebase";
import "./DetailPopuler.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PagePayment } from "../../Components/Payment/PagePayment";

const DetailPopuler = () => {
  const { id } = useParams();
  const [populer, setPopuler] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const populerRef = doc(db, "Populer", id); // Assuming you also changed the Firestore collection name
        const populerSnapshot = await getDoc(populerRef);

        if (populerSnapshot.exists()) {
          const populerData = {
            id: populerSnapshot.id,
            ...populerSnapshot.data(),
          };
          setPopuler(populerData);
        } else {
          // Handle the case where the document with the specified id does not exist.
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [id]);

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="detail_populer_container">
      <Navbar />
      <div className="detail_populer_header">
        <img src="/dtm.webp" alt="" loading="lazy" />
        {Object.keys(populer).length > 0 && (
          <div className="detail_populer_title">
            <img src={populer.image} alt="" loading="lazy" />
            <div className="detail_populer_title_content">
              <h1>{populer.title}</h1>
              <p>{populer.subtitle}</p>
              <div className="veriv">
                <div className="rounded-full bg-emerald-400 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-3.5 w-3.5 text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>Terverifikasi</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="detail_populer_content">
        <PagePayment />
      </div>
    </div>
  );
};

export default DetailPopuler;
