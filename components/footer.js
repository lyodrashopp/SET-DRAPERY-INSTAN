class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        footer {
          background: linear-gradient(135deg, #003366 0%, #0066cc 100%);
          color: white;
          padding: 4rem 1rem 2rem;
          margin-top: auto;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-column h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-column h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #ff6b6b;
          border-radius: 3px;
        }
        
        .footer-column p,
        .footer-column li {
          color: #cce0ff;
          line-height: 1.8;
        }
        
        .footer-column ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-column ul li {
          margin-bottom: 0.75rem;
        }
        
        .footer-column a {
          color: #cce0ff;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-column a:hover {
          color: #ff6b6b;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s;
        }
        
        .social-links a:hover {
          background: #ff6b6b;
          transform: translateY(-3px);
        }
        
        .copyright {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #cce0ff;
          font-size: 0.9rem;
        }
        
        .payment-methods {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        
        .payment-methods img {
          height: 30px;
          filter: grayscale(100%) brightness(200%);
          transition: filter 0.3s;
        }
        
        .payment-methods img:hover {
          filter: grayscale(0%) brightness(100%);
        }
        
        @media (max-width: 768px) {
          footer {
            padding: 3rem 1rem 1.5rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="footer-content">
          <div class="footer-column">
            <h3>Tentang Kami</h3>
            <p>DRAPERY INSTAN HIJAB SET MALAYSIA adalah solusi hijab premium untuk wanita modern yang mengutamakan kemudahan dan kecantikan dalam satu paket lengkap.</p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
          
          <div class="footer-column">
            <h3>Layanan Pelanggan</h3>
            <ul>
              <li><a href="#">Bantuan & Dukungan</a></li>
              <li><a href="#">Cara Pemesanan</a></li>
              <li><a href="#">Pengembalian Barang</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Kontak Kami</h3>
            <ul>
              <li><i data-feather="phone" style="width: 16px; height: 16px; margin-right: 8px;"></i> +62 812-3456-7890</li>
              <li><i data-feather="mail" style="width: 16px; height: 16px; margin-right: 8px;"></i> info@draperyhijab.com</li>
              <li><i data-feather="map-pin" style="width: 16px; height: 16px; margin-right: 8px;"></i> Jakarta, Indonesia</li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Metode Pembayaran</h3>
            <p>Kami menerima pembayaran melalui berbagai metode aman:</p>
            <div class="payment-methods">
              <img src="http://static.photos/payment/bca.png" alt="BCA">
              <img src="http://static.photos/payment/bni.png" alt="BNI">
              <img src="http://static.photos/payment/mandiri.png" alt="Mandiri">
              <img src="http://static.photos/payment/ovo.png" alt="OVO">
              <img src="http://static.photos/payment/gopay.png" alt="GOPAY">
            </div>
          </div>
        </div>
        
        <div class="copyright">
          <p>&copy; 2023 DRAPERY INSTAN HIJAB SET MALAYSIA. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
