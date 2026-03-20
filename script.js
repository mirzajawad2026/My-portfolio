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

















// mouse animation
let mouseover = document.querySelector("#abcd");
window.addEventListener("mousemove", function (dts) {
    mouseover.style.top = dts.clientY + "px";
    mouseover.style.left = dts.clientX + "px";
});