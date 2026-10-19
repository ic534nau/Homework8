
console.log('Hello World!');

const name = "Ivan Calderon";
let hasDownloadedResume = false;
let downloadCount = 0;

const downloadButton = document.getElementById("downloadResume");

downloadButton.addEventListener("click", function() {
    downloadCount++;
    document.getElementById("downloadCount").textContent = downloadCount;
    if (hasDownloadedResume === false) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
    }
});

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

document.getElementById("greeting").textContent = showGreeting(name);

function addSkill() {
    let skill = document.getElementById("skillInput").value;

    let newSkill = document.createElement("li");
    newSkill.textContent = skill;

    document.getElementById("skillsList").appendChild(newSkill);
}

document.getElementById("addSkillButton").addEventListener("click", addSkill);

const projectTitles = [
    "Packet Tracer"
];
const projectDescriptions = [
    "Designed and configured network topology for network department using Cisco Packet Tracer."
];
const projectDeadlines = [
    "2026-12-01"
];
for (let i = 0; i < projectTitles.length; i++) {
    let title = projectTitles[i];
    let description = projectDescriptions[i];
    let deadline = projectDeadlines[i];
    let status;
    if (new Date(deadline) > new Date()) {
    status = "Ongoing";
} else {
    status = "Completed";
}
    let projectCard = document.createElement("div");
    projectCard.className = "card mb-3";
    let projectTitle = document.createElement("h3");
    projectTitle.textContent = title;
    projectCard.appendChild(projectTitle);
    let projectDescription = document.createElement("p");
    projectDescription.textContent = description;
    projectCard.appendChild(projectDescription);
        let projectDeadline = document.createElement("p");
    projectDeadline.textContent = "Deadline: " + deadline;
    projectCard.appendChild(projectDeadline);
    let projectStatus = document.createElement("p");
projectStatus.textContent = "Status: " + status;
projectCard.appendChild(projectStatus);
        document.getElementById("projectsList").appendChild(projectCard);

}
const educationNames = [
    "Yavapai Community College",
    "Northern Arizona University"
];

const educationDates = [
    "2024-2025",
    "2025-present"
];
let educationTable = document.createElement("table");
educationTable.className = "table";
let headerRow = document.createElement("tr");
let schoolHeader = document.createElement("th");
schoolHeader.textContent = "School";
headerRow.appendChild(schoolHeader);
let dateHeader = document.createElement("th");
dateHeader.textContent = "Dates";
headerRow.appendChild(dateHeader);
educationTable.appendChild(headerRow);
for (let i = 0; i < educationNames.length; i++) {
let row = document.createElement("tr");
let schoolCell = document.createElement("td");
schoolCell.textContent = educationNames[i];
row.appendChild(schoolCell);
let dateCell = document.createElement("td");
dateCell.textContent = educationDates[i];
row.appendChild(dateCell);
educationTable.appendChild(row);
document.getElementById("educationTable").appendChild(educationTable);
}

const experienceNames = [
    "Aiden by Best Western",
    "Warner Bros."
];

const experienceRoles = [
    "Helpdesk Support",
    "Network Support Experience"
];

const experienceDates = [
    "2022-2023",
    "2026-present"
];

let experienceTable = document.createElement("table");
experienceTable.className = "table";

let experienceHeader = document.createElement("tr");

let companyHeader = document.createElement("th");
companyHeader.textContent = "Company";
experienceHeader.appendChild(companyHeader);

let roleHeader = document.createElement("th");
roleHeader.textContent = "Role";
experienceHeader.appendChild(roleHeader);

let experienceDateHeader = document.createElement("th");
experienceDateHeader.textContent = "Dates";
experienceHeader.appendChild(experienceDateHeader);

experienceTable.appendChild(experienceHeader);

for (let i = 0; i < experienceNames.length; i++) {
    let row = document.createElement("tr");

    let companyCell = document.createElement("td");
    companyCell.textContent = experienceNames[i];
    row.appendChild(companyCell);

    let roleCell = document.createElement("td");
    roleCell.textContent = experienceRoles[i];
    row.appendChild(roleCell);

    let dateCell = document.createElement("td");
    dateCell.textContent = experienceDates[i];
    row.appendChild(dateCell);

    experienceTable.appendChild(row);
}

document.getElementById("experienceTable").appendChild(experienceTable);
