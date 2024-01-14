import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import "./Menu.css";
import { db } from "../../Utils/Firebase";

export const Menu = () => {
  const [popularData, setpopularData] = useState([]);

  useEffect(() => {
    const popularCollection = collection(db, "Populer");

    const unsubscribe = onSnapshot(popularCollection, (querySnapshot) => {
      const popularItems = [];
      querySnapshot.forEach((doc) => {
        popularItems.push({ id: doc.id, ...doc.data() });
      });

      setpopularData(popularItems);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="menu">
      <div className="populer">
        <h3> 🔥 POPULER</h3>
        <div className="grid">
          {popularData.map((popularItem) => (
            <div key={popularItem.id} className="card">
              <img src={popularItem.image} alt="" />
              <div className="content">
                <h3>{popularItem.title}</h3>
                <p>{popularItem.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
