import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import "./Menu.css";
import { db } from "../../Utils/Firebase";
import { Link } from "react-router-dom";

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
            <Link key={popularItem.id} to={`/Payment/${popularItem.id}`}>
              <div className="card">
                <img src={popularItem.image} alt="" loading="lazy" />
                <div className="content">
                  <h3>{popularItem.title}</h3>
                  <p>{popularItem.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
