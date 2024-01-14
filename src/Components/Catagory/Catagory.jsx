import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../Utils/Firebase";
import "./Catagory.css";

export const Catagory = () => {
  const [catagoryData, setCatagoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const catagoryCollection = collection(db, "Catagory");
    const q = query(
      catagoryCollection,
      selectedCategory ? where("catagory", "==", selectedCategory) : null
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const catagoryItems = [];
      querySnapshot.forEach((doc) => {
        catagoryItems.push({ id: doc.id, ...doc.data() });
      });

      setCatagoryData(catagoryItems);
    });

    return () => {
      unsubscribe();
    };
  }, [selectedCategory]);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="catagory">
      <div className="list">
        <div className="btn_catagory">
          <button
            className={selectedCategory === "topup" ? "active" : ""}
            onClick={() => handleButtonClick("topup")}
          >
            Top Up Games
          </button>
          <button
            className={selectedCategory === "mobilelegend" ? "active" : ""}
            onClick={() => handleButtonClick("mobilelegend")}
          >
            Mobile Legend
          </button>
          <button
            className={selectedCategory === "voucer" ? "active" : ""}
            onClick={() => handleButtonClick("voucer")}
          >
            Voucher
          </button>
          <button
            className={selectedCategory === "tagihan" ? "active" : ""}
            onClick={() => handleButtonClick("tagihan")}
          >
            Pulsa, Data & Tagihan
          </button>
          <button
            className={selectedCategory === "entertaiment" ? "active" : ""}
            onClick={() => handleButtonClick("entertaiment")}
          >
            Entertainment
          </button>
        </div>
        <div className="list_catagory">
          {catagoryData.map((catagoryItem) => (
            <div key={catagoryItem.id} className="card_grid">
              <div className="card-container">
                <img
                  className="card_category"
                  src={catagoryItem.image}
                  alt=""
                  loading="lazy"
                />
                <div className="text-container">
                  <div className="text">
                    <p className="text1">{catagoryItem.title}</p>
                    <p className="text2">{catagoryItem.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
