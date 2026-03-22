const username = "mirzajawad2026";

async function loadProjects() {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await res.json();

    const container = document.getElementById("projects");

    repos.forEach(repo => {     

        // IMPORTANT: Live demo link comes from GitHub Pages / homepage
        const liveLink = repo.homepage && repo.homepage !== ""
            ? repo.homepage
            : `https://${username}.github.io/${repo.name}/`;

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
      <h3>📁 ${repo.name}</h3>
      <p>${repo.description || "No description available"}</p>

      <div class="buttons">
        <a class="btn live" href="${liveLink}" target="_blank">
          🔴 Live Demo
        </a>

        <a class="btn code" href="${repo.html_url}" target="_blank">
          💻 Code
        </a>
      </div>
    `;

        container.appendChild(card);
    });
}

loadProjects();

(function(){
  emailjs.init("jW5JZSY21qlh8X5U6"); 
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("status");
  status.innerHTML = "Sending... ⏳";

  emailjs.sendForm("service_qly72gb", "template_7yr0mpe", this)
    .then(() => {
      status.innerHTML = "✅ Message sent successfully!";
      status.style.color = "lightgreen";
      this.reset();
    }, (error) => {
      status.innerHTML = "❌ Failed to send message!";
      status.style.color = "red";
    });
});


document.querySelectorAll(".right-nav nav").forEach(item => {
  item.addEventListener("click", () => {
    const target = document.getElementById(item.dataset.target);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// mouse animation
let mouseover = document.querySelector("#abcd");
window.addEventListener("mousemove", function (dts) {
    mouseover.style.top = dts.clientY + "px";
    mouseover.style.left = dts.clientX + "px";
});

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Create overlay div
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

// Toggle menu when clicking hamburger icon
if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Close menu when clicking on overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu when clicking on a nav link
const navItems = document.querySelectorAll('.right-nav nav');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Scroll to section
        const target = document.getElementById(item.dataset.target);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Close menu when window is resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});
