class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        :host(.scrolled) nav {
          background: rgba(0, 51, 102, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        
        nav {
          background: transparent;
          padding: 1.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo {
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        
        .logo-img {
          height: 40px;
          margin-right: 12px;
          border-radius: 50%;
          border: 2px solid white;
        }
        
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        li {
          position: relative;
        }
        
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }
        
        a:hover {
          color: #ff6b6b;
        }
        
        .cta-button {
          background: #ff6b6b;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid #ff6b6b;
        }
        
        .cta-button:hover {
          background: transparent;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
          
          ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 51, 102, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          
          ul.active {
            display: flex;
          }
          
          .cta-button {
            text-align: center;
            display: block;
          }
        }
      </style>
      
      <nav>
        <div class="logo-container">
          <a href="/" class="logo">
            <img src="https://scontent.fsub32-1.fna.fbcdn.net/v/t39.30808-1/519020500_122099497172957124_4142093252870850020_n.jpg?stp=c26.26.448.448a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=nP4J4SbDM1MQ7kNvwH769xq&_nc_oc=AdktCBYIimg5JhW8TTgSfuuWiG9bKOD0M-HAF3xazHYDSHHGGZZAMCBp8taiM1yInz8&_nc_zt=24&_nc_ht=scontent.fsub32-1.fna&_nc_gid=drDgC2CEL3uLATEFEWaD9g&oh=00_Afc9_AuPopgyV45_3d-gsM6b-CyQkI51nm0n9abNhCv0wg&oe=6905A082" alt="Logo" class="logo-img">
            DRAPERY HIJAB
          </a>
        </div>
        
        <button class="mobile-menu-button" id="menu-toggle">☰</button>
        
        <ul id="menu">
          <li><a href="#features">Fitur</a></li>
          <li><a href="#gallery">Galeri</a></li>
          <li><a href="#testimonials">Testimoni</a></li>
          <li><a href="#pricing">Harga</a></li>
          <li><a href="#order" class="cta-button">Pesan Sekarang</a></li>
        </ul>
      </nav>
    `;
    
    // Mobile menu toggle
    const menuToggle = this.shadowRoot.getElementById('menu-toggle');
    const menu = this.shadowRoot.getElementById('menu');
    
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
