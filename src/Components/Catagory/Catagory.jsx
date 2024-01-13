import "./Catagory.css";

export const Catagory = () => {
  return (
    <div className="catagory">
      <div className="list">
        <div className="btn_catagory">
          <button>Top Up Games</button>
          <button>Mobile Legends</button>
          <button>Voucher</button>
          <button>Pulsa , Data & Tagihan</button>
          <button>Entertaiment</button>
        </div>
        <div className="list_catagory">
          <div className="card_grid">
            <div className="card-container">
              <img className="card_category" src="tm.webp" alt="" />
              <div className="text-container">
                <div className="text">
                  <p className="text1">Jasa Komen Album</p>
                  <p className="text2">Moonton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
