// Navbar Fixed
window.onscroll = function () {
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const navLinks = document.querySelectorAll(".nav-link");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed", "shadow-md");
      // header.classList.remove("bg-transparent");

      logo.classList.remove("text-[#550E0E]");
      logo.classList.add("text-[#FFD4D4]");

      navLinks.forEach((link) => {
        link.classList.remove("text-[#550E0E]");
        link.classList.add("text-[#FFD4D4]");
      });
    } else {
      header.classList.remove("navbar-fixed", "shadow-md");
      // header.classList.add("bg-transparent");

      logo.classList.add("text-[#550E0E]");
      logo.classList.remove("text-[#FFD4D4]");

      navLinks.forEach((link) => {
        link.classList.add("text-[#550E0E]");
        link.classList.remove("text-[#FFD4D4]");
      });
    }
  };

  // Scrollspy: highlight link aktif saat section muncul
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[data-target="${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("font-bold", "underline");
          });
          if (navLink) {
            navLink.classList.add("font-bold", "underline");
          }
        }
      });
    },
    {
      root: null,
      threshold: 0.6,
    }
  );

  sections.forEach((section) => observer.observe(section));

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Tabs about
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove("bg-[#800000]", "text-[#FFAAAA]");
            btn.classList.add("bg-[#800000]", "opacity-50", "text-[#FFD4D4]")
        });

        // Hide all tab contents
        contents.forEach(content => content.classList.add("hidden"));

        // Active clicked button and show corresponding content
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.remove("hidden");
        button.classList.remove("bg-[#800000", "opacity-50", "text-[#FFD4D4]");
        button.classList.add("bg-[800000", "text-[#FFAAAA");
    } )
})

// Tabs Portfolio
function showTab(tab) {
    // Konten
    document.getElementById('content-uiux').classList.add('hidden');
    document.getElementById('content-projects').classList.add('hidden');

    // Tabs
    document.getElementById('tab-uiux').classList.remove('text-[#800000]');
    document.getElementById('tab-projects').classList.remove('text-[#800000]');
    document.getElementById('tab-uiux').classList.add('text-[#800000]', 'opacity-50');
    document.getElementById('tab-projects').classList.add('text-[#800000]', 'opacity-50');

    if (tab === 'uiux') {
      document.getElementById('content-uiux').classList.remove('hidden');
      document.getElementById('tab-uiux').classList.add('text-[#800000]');
      document.getElementById('tab-uiux').classList.remove('text-[#800000]', 'opacity-50');
    } else {
      document.getElementById('content-projects').classList.remove('hidden');
      document.getElementById('tab-projects').classList.add('text-[#800000]');
      document.getElementById('tab-projects').classList.remove('text-[#800000]', 'opacity-50');
    }
}

// Modal Sertificate
const thumbnails = document.querySelectorAll('.thumbnail');
  const modal = document.getElementById('imgModal');
  const modalImage = document.getElementById('modalImage');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const closeBtn = document.getElementById('closeModal');

  let currentIndex = 0;

  function showModal(index) {
    currentIndex = index;
    modalImage.src = thumbnails[currentIndex].src;
    modal.classList.remove('hidden');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    modalImage.src = thumbnails[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    modalImage.src = thumbnails[currentIndex].src;
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => showModal(index));
  });

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

  // Close modal on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') modal.classList.add('hidden');
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });