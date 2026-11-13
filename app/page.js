'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    id: 'jakon-1', category: 'Editorial Design', year: '2026',
    title: 'Buletin JAKON BANTEN', subtitle: 'Edisi Januari – Maret 2026',
    description: 'Desain publikasi editorial untuk media informasi dan komunikasi bidang jasa konstruksi. Mengolah struktur informasi, tipografi, foto, infografik, dan tata letak majalah menjadi satu kesatuan visual.',
    role: 'Graphic Design · Editorial Layout · Publication', cover: '/projects/jakon-edisi-1-p01.jpg',
    gallery: ['/projects/jakon-edisi-1-p01.jpg','/projects/jakon-edisi-1-p02.jpg','/projects/jakon-edisi-1-p05.jpg','/projects/jakon-edisi-1-p08.jpg','/projects/jakon-edisi-1-p13.jpg','/projects/jakon-edisi-1-p21.jpg'],
    pdf: '/documents/buletin-jakon-edisi-jan-mar-2026.pdf'
  },
  {
    id: 'jakon-2', category: 'Editorial Design', year: '2026',
    title: 'Buletin JAKON BANTEN', subtitle: 'Edisi April – Juni 2026',
    description: 'Pengembangan edisi lanjutan Buletin JAKON BANTEN dengan pendekatan visual yang konsisten, hierarki informasi yang jelas, serta komposisi editorial yang dinamis.',
    role: 'Graphic Design · Editorial Layout · Publication', cover: '/projects/jakon-edisi-2-p01.jpg',
    gallery: ['/projects/jakon-edisi-2-p01.jpg','/projects/jakon-edisi-2-p02.jpg','/projects/jakon-edisi-2-p05.jpg','/projects/jakon-edisi-2-p08.jpg','/projects/jakon-edisi-2-p13.jpg','/projects/jakon-edisi-2-p21.jpg'],
    pdf: '/documents/buletin-jakon-edisi-apr-jun-2026.pdf'
  },
  {
    id: 'gula-aren', category: 'Brand & Business Publication', year: '2026',
    title: 'Lebak Aren Industrial Development', subtitle: 'Prospektus Bisnis Industri Pengolahan & Hilirisasi Gula Aren',
    description: 'Konsep prospektus bisnis yang mengangkat potensi komoditas gula aren Kabupaten Lebak. Visual menggabungkan nuansa hijau dan emas, fotografi produk, peta wilayah, infografik rantai nilai, serta informasi peluang investasi.',
    role: 'Graphic Design · Infographic · Editorial Publication', cover: '/projects/gula-aren-p01.jpg',
    gallery: ['/projects/gula-aren-p01.jpg','/projects/gula-aren-p02.jpg','/projects/gula-aren-p03.jpg','/projects/gula-aren-p04.jpg','/projects/gula-aren-p05.jpg','/projects/gula-aren-p06.jpg','/projects/gula-aren-p07.jpg','/projects/gula-aren-p08.jpg'],
    pdf: '/documents/prospektus-gula-aren.pdf'
  }  ,
  {
    id: 'kelapa-terpadu', category: 'Investment Prospectus', year: '2026',
    title: 'Pandeglang Integrated Coconut Industry', subtitle: 'Prospektus Investasi & Hilirisasi Kelapa Terpadu',
    description: 'Prospektus investasi delapan halaman yang mengembangkan potensi kelapa Kabupaten Pandeglang menjadi ekosistem industri terintegrasi. Visual mencakup data komoditas, landasan kebijakan, portofolio produk pangan dan non-pangan, konsep zero-waste, rantai nilai industri, lokasi indikatif Kawasan Industri Bojong, model kemitraan, serta roadmap investasi.',
    role: 'Graphic Design · Editorial Publication · Infographic · Information Design', cover: '/projects/kelapa-terpadu-p01.jpg',
    gallery: ['/projects/kelapa-terpadu-p01.jpg','/projects/kelapa-terpadu-p02.jpg','/projects/kelapa-terpadu-p03.jpg','/projects/kelapa-terpadu-p04.jpg','/projects/kelapa-terpadu-p05.jpg','/projects/kelapa-terpadu-p06.jpg','/projects/kelapa-terpadu-p07.jpg','/projects/kelapa-terpadu-p08.jpg'],
    pdf: '/documents/prospektus-kelapa-terpadu.pdf'
  },
  {
    id: 'tepung-pisang', category: 'Investment Prospectus', year: '2026',
    title: 'Lebak Banana Flour Industrial Development', subtitle: 'Prospektus Bisnis Industri Pengolahan Tepung Pisang',
    description: 'Prospektus bisnis delapan halaman yang mengangkat pengolahan pisang lokal Kabupaten Lebak menjadi bahan baku industri pangan bernilai tambah. Materi visual meliputi executive summary, alur proses pengolahan, portofolio produk tepung pisang, potensi dan dasar kebijakan, lokasi indikatif Curugbitung–Muncang–Maja, model bisnis, fasilitas industri, target pasar, dampak ekonomi, dan roadmap pengembangan.',
    role: 'Graphic Design · Editorial Publication · Infographic · Information Design', cover: '/projects/tepung-pisang-p01.jpg',
    gallery: ['/projects/tepung-pisang-p01.jpg','/projects/tepung-pisang-p02.jpg','/projects/tepung-pisang-p03.jpg','/projects/tepung-pisang-p04.jpg','/projects/tepung-pisang-p05.jpg','/projects/tepung-pisang-p06.jpg','/projects/tepung-pisang-p07.jpg','/projects/tepung-pisang-p08.jpg'],
    pdf: '/documents/prospektus-tepung-pisang.pdf'
  }
];

export default function Home() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    const nodes = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: .12 });
    nodes.forEach(n => io.observe(n));
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  return <>
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#home" className="brand">PORTO<span>JENAL</span><i>®</i></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka navigasi">{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a onClick={() => setMenuOpen(false)} href="#work">Projects</a><a onClick={() => setMenuOpen(false)} href="#about">About</a><a onClick={() => setMenuOpen(false)} href="#experience">Experience</a><a onClick={() => setMenuOpen(false)} href="#contact" className="nav-cta">Let’s Talk ↗</a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-noise" />
        <div className="hero-top"><span>INDEPENDENT CREATIVE PORTFOLIO</span><span>SERANG, INDONESIA · 2026</span></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot"/> JUNIOR GRAPHIC DESIGNER</p>
          <h1>Ideas into<br/><em>visual stories.</em></h1>
          <div className="hero-bottom"><p className="hero-desc">Saya Jaenal Arifin. Saya merancang visual yang komunikatif melalui desain editorial, publikasi, dan identitas visual.</p><a className="round-link" href="#work" aria-label="Lihat proyek">↓</a></div>
        </div>
        <div className="hero-stamp"><span>DESIGN</span><b>WITH<br/>PURPOSE</b><span>EST. 2025 — 2026</span></div>
        <div className="hero-footer"><span>SELECTED WORKS</span><span>SCROLL TO EXPLORE ↓</span><span>01 / 05</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker reveal"><span>01 — ABOUT</span><span>THE DESIGNER</span></div>
        <div className="intro-grid">
          <h2 className="reveal">Design is how<br/>I make <em>ideas</em><br/>feel real.</h2>
          <div className="intro-text reveal"><p className="lead">Halo, saya Jaenal Arifin — seorang Desainer Grafis Muda yang tertarik pada bagaimana visual dapat menyampaikan informasi dengan lebih kuat, jelas, dan berkesan.</p><p>Saya berfokus pada desain publikasi, layout editorial, infografik, serta komunikasi visual untuk kebutuhan digital maupun cetak. Dalam setiap proyek, saya memperhatikan detail tipografi, warna, komposisi, dan konsistensi visual.</p><div className="skill-tags"><span>Editorial Design</span><span>Layout & Typography</span><span>Visual Communication</span><span>Infographic</span><span>Print Design</span></div></div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-kicker reveal"><span>02 — SELECTED WORK</span><span>2026 / 05 SELECTED PROJECTS</span></div>
        <div className="work-heading reveal"><h2>Selected<br/><em>projects.</em></h2><p>Beberapa karya pilihan yang merepresentasikan eksplorasi visual, ketelitian layout, dan pendekatan desain yang berorientasi pada pesan.</p></div>
        <div className="project-list">
          {projects.map((p, i) => <article className={`project-card reveal project-${i+1}`} key={p.id}>
            <button className="project-image" onClick={() => setActive(p)} aria-label={`Lihat ${p.title}`}><img src={p.cover} alt={`${p.title} cover`} /><span className="image-open">VIEW PROJECT ↗</span></button>
            <div className="project-meta"><span>0{i+1} / {p.category}</span><span>{p.year}</span></div>
            <div className="project-title-row"><div><h3>{p.title}</h3><p>{p.subtitle}</p></div><button className="arrow-btn" onClick={() => setActive(p)} aria-label="Detail proyek">↗</button></div>
          </article>)}
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-kicker reveal"><span>03 — EXPERIENCE</span><span>PROFESSIONAL JOURNEY</span></div>
        <div className="experience-grid">
          <div><h2 className="reveal">Growing<br/>through <em>design.</em></h2><p className="experience-intro reveal">Pengalaman profesional sebagai Desainer Grafis Muda di lingkungan konsultan umum.</p></div>
          <div className="experience-detail reveal">
            <div className="exp-date">2025 — 2026 <span>WORK EXPERIENCE</span></div>
            <h3>Junior Graphic Designer</h3><h4>PT Bangun Insan Global</h4>
            <p>Berperan dalam pengembangan kebutuhan komunikasi visual perusahaan maupun klien, mulai dari materi promosi hingga media digital dan cetak.</p>
            <ul><li>Mengembangkan desain grafis untuk kebutuhan perusahaan dan klien.</li><li>Membuat konten media sosial, poster, brosur, banner, dan materi promosi.</li><li>Mengolah elemen visual, tipografi, warna, dan tata letak.</li><li>Melakukan pengeditan dan revisi sesuai arahan.</li><li>Mendukung branding dan komunikasi visual perusahaan.</li></ul>
            <a className="text-link" href="/documents/surat-pengalaman-kerja-pt-big.pdf" target="_blank">LIHAT SURAT PENGALAMAN KERJA <span>↗</span></a>
          </div>
        </div>
        <div className="credential reveal"><div className="credential-mark">BIG</div><div><span>PROFESSIONAL CREDENTIAL</span><h3>Surat Keterangan Pengalaman Kerja</h3><p>PT Bangun Insan Global · Nomor 008/BIG/SKPK/011/2026 · 10 November 2026</p></div><a href="/documents/surat-pengalaman-kerja-pt-big.pdf" target="_blank" aria-label="Buka surat">↗</a></div>
      </section>

      <section className="approach section-pad">
        <div className="section-kicker reveal"><span>04 — MY APPROACH</span><span>DESIGN PRINCIPLES</span></div>
        <div className="approach-grid"><h2 className="reveal">Good design<br/>is <em>clear.</em></h2><div className="principles">{[['01','Clarity first','Informasi harus mudah dipahami sebelum terlihat menarik.'],['02','Purposeful details','Setiap elemen visual memiliki fungsi dan alasan.'],['03','Consistent visual','Warna, tipografi, dan layout membangun satu bahasa visual.']].map(x=><div className="principle reveal" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><b>↗</b></div>)}</div></div>
      </section>

      <footer className="footer section-pad" id="contact"><div className="section-kicker"><span>05 — CONTACT</span><span>OPEN FOR COLLABORATION</span></div><p className="footer-overline">HAVE A PROJECT IN MIND?</p><h2>Let’s make<br/><em>something good.</em></h2><a className="contact-link" href="mailto:?subject=Project%20Collaboration%20-%20Porto%20Jenal">START A CONVERSATION <span>↗</span></a><div className="footer-bottom"><a href="#home" className="brand">PORTO<span>JENAL</span><i>®</i></a><span>JAENAL ARIFIN · JUNIOR GRAPHIC DESIGNER</span><span>© 2026 ALL RIGHTS RESERVED</span></div></footer>
    </main>

    {active && <div className="modal-backdrop" onClick={() => setActive(null)}><div className="project-modal" onClick={e => e.stopPropagation()}><div className="modal-head"><div><span>{active.category} · {active.year}</span><h2>{active.title}</h2><p>{active.subtitle}</p></div><button onClick={() => setActive(null)} aria-label="Tutup">×</button></div><p className="modal-description">{active.description}</p><div className="modal-role">{active.role}</div><div className="modal-gallery">{active.gallery.map((src,i)=><img key={src} src={src} alt={`${active.title} halaman ${i+1}`} loading="lazy"/>)}</div><a className="modal-pdf" href={active.pdf} target="_blank">BUKA DOKUMEN LENGKAP <span>↗</span></a></div></div>}
  </>;
}
