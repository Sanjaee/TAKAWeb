import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="kiri">
        <img src="logo.webp" alt="" />
        <nav>
          <a href="#home">
            <img src="./home.png" alt="Home" loading="lazy" />
            Beranda
          </a>

          <a href="#about">
            <img src="cari.png" alt="About" loading="lazy" />
            Cek Transaksi
          </a>

          <a href="#blog">
            <img src="kado.png" alt="Blog" loading="lazy" />
            Gift Skin
          </a>

          <a href="#contact">
            <img src="kakulator.png" alt="Contact" loading="lazy" />
            Kalkulator
          </a>
        </nav>
      </div>
      <div className="kanan">
        <div className="search-container">
          <input type="text" name="" id="" placeholder="Search" />
        </div>
        <div className="dropdownTranslate">
          <p className="languageLabel">ID &#11167;</p>
          <div className="languageOptions">
            <button>Indonesia</button>
            <button>English</button>
          </div>
        </div>
      </div>
    </div>
  );
};
