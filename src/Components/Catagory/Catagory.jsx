import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Utils/Firebase";
import "./Catagory.css";

export const Catagory = () => {
  const [catagoryData, setCatagoryData] = useState([]);

  useEffect(() => {
    const catagoryCollection = collection(db, "Catagory");

    const unsubscribe = onSnapshot(catagoryCollection, (querySnapshot) => {
      const catagoryItems = [];
      querySnapshot.forEach((doc) => {
        catagoryItems.push({ id: doc.id, ...doc.data() });
      });

      setCatagoryData(catagoryItems);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="catagory">
      <div className="list">
        <div className="btn_catagory">
          <button>Top Up Games</button>
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
