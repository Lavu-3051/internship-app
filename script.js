const internships = [
  {
    title: "Web Development Intern",
    skill: "Web Development",
    location: "Chennai",
    company: "Tech Solutions Pvt Ltd",
    duration: "3 Months",
    logo: "images/tech.png"
  },
  {
    title: "Python Intern",
    skill: "Python",
    location: "Bangalore",
    company: "CodeCraft",
    duration: "2 Months",
    logo: "images/codecraft.png"
  },
  {
    title: "Data Science Intern",
    skill: "Data Science",
    location: "Hyderabad",
    company: "DataMind AI",
    duration: "6 Months",
    logo: "images/datamind.png"
  },
  {
    title: "Frontend Intern",
    skill: "Frontend",
    location: "Coimbatore",
    company: "UI Labs",
    duration: "3 Months",
    logo: "images/uilabs.png"
  }
];
const internshipList = document.getElementById("internshipList");
const skillSelect = document.getElementById("skillFilter");
const searchInput = document.getElementById("searchInput");

function displayInternships(selectedSkill, searchText = "") {
    internshipList.innerHTML = "";

    let filtered = [...internships];

    // Skill filter
    if (selectedSkill !== "All") {
        filtered = filtered.filter(i => i.skill === selectedSkill);
    }

    // Search filter
    if (searchText.trim() !== "") {
        const text = searchText.toLowerCase();
        filtered = filtered.filter(i =>
            i.title.toLowerCase().includes(text) ||
            i.location.toLowerCase().includes(text)
        );
    }

    if (filtered.length === 0) {
        internshipList.innerHTML = "<p>No internships found</p>";
        return;
    }

    filtered.forEach(i => {
        const div = document.createElement("div");
        div.className = "internship";
        div.innerHTML = `
          <img src="${i.logo}" alt="${i.company} Logo" class="company-logo">
          <h3>${i.title}</h3>
          <p><strong>Company:</strong> ${i.company}</p>
          <p><strong>Skill:</strong> ${i.skill}</p>
          <p><strong>Location:</strong> ${i.location}</p>
          <p><strong>Duration:</strong> ${i.duration}</p>
        <button class="apply-btn">Apply Now</button>
        `;        
       internshipList.appendChild(div);
          const applyBtn = div.querySelector(".apply-btn");

          applyBtn.addEventListener("click", () => {
            window.location.href = "form.html";
});
    });
}
// Initial load
displayInternships("All");

// Dropdown change
skillSelect.addEventListener("change", () => {
    displayInternships(skillSelect.value, searchInput.value);
});

// Search typing
searchInput.addEventListener("keyup", () => {
    displayInternships(skillSelect.value, searchInput.value);
});