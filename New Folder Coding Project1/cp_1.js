//step 3 completed
document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("feedback-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const feedbackDisplay = document.getElementById("feedback-display");

const tooltipUsername = document.getElementById("tooltip-username");
const tooltipEmail = document.getElementById("tooltip-email");

// character count feature
comments.addEventListener("input", () => {
charCount.textContent = `Character count: ${comments.value.length}`;
});

// Tooltip events
username.addEventListener("mouseover", () => {
tooltipUsername.style.display = "inline";
});
username.addEventListener("mouseout", () => {
tooltipUsername.style.display = "none";
});

email.addEventListener("mouseover", () => {
tooltipEmail.style.display = "inline";
});
email.addEventListener("mouseout", () => {
tooltipEmail.style.display = "none";
});

// Prevent empty submission 
form.addEventListener("submit", (e) => {
e.preventDefault();

const name = username.value.trim();
const mail = email.value.trim();
const comment = comments.value.trim();

if (!name || !mail || !comment) {
alert("Please fill out all fields before submitting.");
return;
}

const feedbackEntry = document.createElement("div");
feedbackEntry.classList.add("feedback-entry");
feedbackEntry.innerHTML = `
<p><strong>${name}</strong> (${mail})</p>
<p>${comment}</p>
`;

feedbackDisplay.appendChild(feedbackEntry);

// Clear the inputs
form.reset();
charCount.textContent = "Character count: 0";
});

// For step 5, prevent background bubbling
feedbackDisplay.addEventListener("click", (e) => {
e.stopPropagation();
});
});