// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle?.addEventListener('click', () => {
  const shown = mainNav.style.display === 'block';
  mainNav.style.display = shown ? '' : 'block';
});

// Populate current year
document.getElementById('year').textContent = new Date().getFullYear();

// Modal logic
const modal = document.getElementById('item-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

function openModal(html) {
  modalContent.innerHTML = html;
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modalContent.innerHTML = '';
}

modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Attach details buttons
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const item = e.target.closest('.menu-item');
    const name = item.dataset.name || item.querySelector('h3').textContent;
    const price = item.dataset.price || item.querySelector('.price').textContent;
    const img = item.querySelector('img').src;
    const desc = item.querySelector('.desc').textContent;
    const html = `
      <img src="${img}" alt="${name}" />
      <h3>${name} — $${price}</h3>
      <p>${desc}</p>
      <p><strong>Allergies & Notes:</strong> Please inform our staff about allergies or dietary restrictions.</p>
      <div style="margin-top:.6rem"><button class="btn" onclick="closeModal()">Close</button></div>
    `;
    openModal(html);
  });
});

// Reservation form simple handling (mock)
const form = document.getElementById('reservation-form');
const msg = document.getElementById('form-msg');
form?.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const fd = new FormData(form);
  const name = fd.get('name') || 'Guest';
  // Basic validation
  const email = fd.get('email') || '';
  if (!email.toString().includes('@')) {
    msg.textContent = 'Please enter a valid email.';
    msg.style.color = 'crimson';
    return;
  }
  // Mock sending
  msg.style.color = 'green';
  msg.textContent = `Thanks ${name}! We received your reservation request and will confirm via email shortly.`;
  form.reset();
});