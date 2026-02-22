/* ================================
   WANDERLUST TRAVEL — script.js
================================ */

// ===== DATA =====
const destinations = [
  { id: 1, name: 'Santorini', country: 'Greece', continent: 'europe', category: 'beach', budget: 'luxury', price: 2499, duration: '7 days', rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop', tag: 'Best Seller', desc: 'Iconic white-washed buildings perched on volcanic cliffs above shimmering azure waters.' },
  { id: 2, name: 'Bali', country: 'Indonesia', continent: 'asia', category: 'beach', budget: 'mid', price: 1299, duration: '10 days', rating: 4.8, reviews: 489, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop', tag: 'Popular', desc: 'Tropical paradise with lush rice terraces, vibrant temples, and exceptional surf.' },
  { id: 3, name: 'Swiss Alps', country: 'Switzerland', continent: 'europe', category: 'mountain', budget: 'luxury', price: 3299, duration: '8 days', rating: 4.9, reviews: 201, image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop', tag: 'Adventure', desc: 'Majestic peaks, pristine snow, and charming alpine villages in the heart of Europe.' },
  { id: 4, name: 'Machu Picchu', country: 'Peru', continent: 'americas', category: 'adventure', budget: 'mid', price: 1899, duration: '9 days', rating: 4.9, reviews: 378, image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop', tag: 'Wonder', desc: 'The legendary Incan citadel hidden in the clouds—a journey through ancient history.' },
  { id: 5, name: 'Maldives', country: 'Maldives', continent: 'asia', category: 'beach', budget: 'luxury', price: 3999, duration: '7 days', rating: 5.0, reviews: 156, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop', tag: 'Luxury', desc: 'Overwater bungalows, crystal lagoons, and coral reefs in the Indian Ocean.' },
  { id: 6, name: 'Kyoto', country: 'Japan', continent: 'asia', category: 'culture', budget: 'mid', price: 2199, duration: '10 days', rating: 4.8, reviews: 423, image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop', tag: 'Cultural', desc: 'Ancient temples, cherry blossoms, and timeless traditions in Japan\'s cultural heart.' },
  { id: 7, name: 'Safari Kenya', country: 'Kenya', continent: 'africa', category: 'adventure', budget: 'luxury', price: 4299, duration: '12 days', rating: 4.9, reviews: 189, image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop', tag: 'Wildlife', desc: 'Witness the Great Migration and encounter the Big Five on the Maasai Mara.' },
  { id: 8, name: 'Amalfi Coast', country: 'Italy', continent: 'europe', category: 'scenic', budget: 'luxury', price: 2799, duration: '7 days', rating: 4.8, reviews: 267, image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=800&auto=format&fit=crop', tag: 'Scenic', desc: 'Dramatic cliff-side villages, turquoise waters, and fresh limoncello on the Italian coast.' },
  { id: 9, name: 'Patagonia', country: 'Argentina', continent: 'americas', category: 'adventure', budget: 'mid', price: 2599, duration: '14 days', rating: 4.7, reviews: 132, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop', tag: 'Adventure', desc: 'Towering granite peaks, glaciers, and untouched wilderness at the end of the world.' },
  { id: 10, name: 'Dubai', country: 'UAE', continent: 'asia', category: 'city', budget: 'luxury', price: 1999, duration: '6 days', rating: 4.7, reviews: 345, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop', tag: 'City Luxury', desc: 'Ultramodern skyline, world-class shopping, and golden desert dunes.' },
  { id: 11, name: 'Iceland', country: 'Iceland', continent: 'europe', category: 'adventure', budget: 'mid', price: 2899, duration: '8 days', rating: 4.8, reviews: 278, image: 'https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?q=80&w=800&auto=format&fit=crop', tag: 'Northern Lights', desc: 'Chase the Aurora Borealis, explore volcanic landscapes and majestic waterfalls.' },
  { id: 12, name: 'Banff', country: 'Canada', continent: 'americas', category: 'mountain', budget: 'mid', price: 1799, duration: '7 days', rating: 4.8, reviews: 214, image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop', tag: 'Nature', desc: 'Turquoise glacier lakes, dramatic Rocky Mountain peaks and abundant wildlife.' }
];

const testimonials = [
  { name: 'Sarah Mitchell', location: 'New York, USA', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', rating: 5, text: 'WanderLust turned our honeymoon into pure magic. Every detail was perfectly arranged, from the overwater villa in Maldives to the sunset dinners. We\'ll be back for our anniversary!' },
  { name: 'James Okafor', location: 'London, UK', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', rating: 5, text: 'The Patagonia trek was life-changing. The guides were incredibly knowledgeable, safety was a priority, and the landscapes... I\'m still at a loss for words. 10/10 would recommend.' },
  { name: 'Yuki Tanaka', location: 'Tokyo, Japan', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', rating: 5, text: 'Booking the Santorini package was effortless, and the experience exceeded every expectation. Our guide Alexis was wonderful. Already planning our next trip through WanderLust!' }
];

// ===== NAVBAR =====
function initNavbar() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.innerHTML = nav.classList.contains('open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
    // close on link click
    nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
    }));
  }
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(110%)'; t.style.transition = '0.4s ease'; setTimeout(() => t.remove(), 400); }, 3500);
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.getAttribute('data-suffix') || '';
  let start = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target.toLocaleString() + suffix; clearInterval(timer); return; }
    el.textContent = Math.floor(start).toLocaleString() + suffix;
  }, 20);
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

// ===== HERO SEARCH =====
function handleHeroSearch(e) {
  e.preventDefault();
  const dest = document.getElementById('hero-dest')?.value;
  const type = document.getElementById('hero-type')?.value;
  const when = document.getElementById('hero-when')?.value;
  let url = 'destinations.html?';
  if (dest) url += `q=${encodeURIComponent(dest)}&`;
  if (type && type !== 'all') url += `cat=${type}&`;
  window.location.href = url;
}

// ===== RENDER HOME DESTINATIONS (preview) =====
function renderHomeDestinations() {
  const grid = document.getElementById('home-dest-grid');
  if (!grid) return;
  const featured = destinations.slice(0, 6);
  grid.innerHTML = featured.map(d => destCard(d)).join('');
}

function destCard(d) {
  return `
    <div class="dest-card reveal" onclick="window.location='tour.html?id=${d.id}'">
      <img src="${d.image}" alt="${d.name}" loading="lazy">
      <div class="dest-overlay"></div>
      <div class="dest-action"><i class="fas fa-arrow-right"></i></div>
      <div class="dest-info">
        <span class="dest-tag">${d.tag}</span>
        <div class="dest-name">${d.name}, ${d.country}</div>
        <p style="font-size:0.85rem;opacity:0.8;margin-top:0.3rem">${d.duration}</p>
        <div class="dest-meta">
          <div class="dest-price">From $${d.price.toLocaleString()} <small>/ person</small></div>
          <div class="dest-rating"><i class="fas fa-star"></i> ${d.rating}</div>
        </div>
      </div>
    </div>`;
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
    <div class="test-card reveal">
      <div class="test-stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}</div>
      <p class="test-text">"${t.text}"</p>
      <div class="test-author">
        <img class="test-avatar" src="${t.avatar}" alt="${t.name}">
        <div>
          <div class="test-name">${t.name}</div>
          <div class="test-place"><i class="fas fa-map-marker-alt" style="font-size:0.75rem;color:var(--secondary)"></i> ${t.location}</div>
        </div>
      </div>
    </div>`).join('');
}

// ===== DESTINATIONS PAGE =====
function renderDestinations(list) {
  const grid = document.getElementById('dest-grid');
  const count = document.getElementById('dest-count');
  if (!grid) return;
  grid.innerHTML = list.length
    ? list.map(d => destCard(d)).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:4rem 0;color:var(--muted)"><i class="fas fa-search" style="font-size:3rem;opacity:0.3;display:block;margin-bottom:1rem"></i><p>No destinations found. Try different filters.</p></div>`;
  if (count) count.textContent = `${list.length} destinations found`;
  initReveal();
}

function filterDestinations() {
  const q = (document.getElementById('filter-search')?.value || '').toLowerCase();
  const continent = document.getElementById('filter-continent')?.value || 'all';
  const category = document.getElementById('filter-category')?.value || 'all';
  const budget = document.getElementById('filter-budget')?.value || 'all';
  const sort = document.getElementById('filter-sort')?.value || 'popular';

  let list = destinations.filter(d => {
    const matchQ = !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q);
    const matchC = continent === 'all' || d.continent === continent;
    const matchCat = category === 'all' || d.category === category;
    const matchB = budget === 'all' || d.budget === budget;
    return matchQ && matchC && matchCat && matchB;
  });

  if (sort === 'price-low') list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') list.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

  renderDestinations(list);
}

function initDestinationsPage() {
  // read URL params
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q'); const cat = params.get('cat');
  if (q) { const el = document.getElementById('filter-search'); if (el) el.value = q; }
  if (cat) { const el = document.getElementById('filter-category'); if (el) el.value = cat; }
  filterDestinations();
  ['filter-search', 'filter-continent', 'filter-category', 'filter-budget', 'filter-sort'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('input', filterDestinations); el.addEventListener('change', filterDestinations); }
  });
}

// ===== TOUR DETAIL PAGE =====
function initTourPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const tour = destinations.find(d => d.id === id) || destinations[0];
  renderTourDetail(tour);

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });

  // Booking form
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Booking request sent! We\'ll contact you within 24 hours.', 'success');
      form.reset();
    });
  }
}

function renderTourDetail(tour) {
  const titleEl = document.getElementById('tour-title');
  const metaEl = document.getElementById('tour-meta');
  const priceEl = document.getElementById('tour-price');
  const descEl = document.getElementById('tour-desc');
  const imgEl = document.getElementById('tour-main-img');
  const pageTitleEl = document.getElementById('tour-page-title');

  if (titleEl) titleEl.textContent = `${tour.name}, ${tour.country}`;
  if (pageTitleEl) pageTitleEl.textContent = `${tour.name} | WanderLust`;
  if (metaEl) metaEl.innerHTML = `
    <span><i class="fas fa-clock" style="color:var(--secondary)"></i> ${tour.duration}</span>
    <span><i class="fas fa-star" style="color:var(--accent)"></i> ${tour.rating} (${tour.reviews} reviews)</span>
    <span><i class="fas fa-globe" style="color:var(--primary)"></i> ${tour.continent.charAt(0).toUpperCase() + tour.continent.slice(1)}</span>
    <span><i class="fas fa-tag" style="color:var(--success)"></i> ${tour.tag}</span>`;
  if (priceEl) priceEl.innerHTML = `$${tour.price.toLocaleString()} <span>/ person</span>`;
  if (descEl) descEl.textContent = tour.desc;
  if (imgEl) { imgEl.src = tour.image; imgEl.alt = tour.name; }
}

// ===== CONTACT PAGE =====
function initContactPage() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Message sent! We\'ll reply within 24 hours.', 'success');
      form.reset();
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== NEWSLETTER =====
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast('You\'re subscribed! Welcome to the WanderLust family.', 'success');
      form.reset();
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initNewsletter();

  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') {
    renderHomeDestinations();
    renderTestimonials();
  }

  initReveal();
  initCounters();

  if (page === 'destinations.html') {
    initDestinationsPage();
  } else if (page === 'tour.html') {
    initTourPage();
  } else if (page === 'contact.html') {
    initContactPage();
  }
});
