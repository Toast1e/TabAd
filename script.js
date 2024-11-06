// List of titles to cycle through for the advertisement effect
const titles = [
  "JUST DO IT",
  "Limited Time UBER offer",
  "NEW Apple 16",
  "NIVIA for MEN",
];

// List of favicon paths to alternate
const favicons = [
  "ico/favicon1.png",
  "ico/favicon2.png",
  "ico/favicon3.png",
  "ico/favicon4.png",
];

let titleIndex = 0;
let faviconIndex = 0;

function changeTabContent() {
  // Update the title
  document.title = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;

  // Update the favicon
  const favicon = document.getElementById("dynamic-favicon");
  favicon.href = favicons[faviconIndex];
  faviconIndex = (faviconIndex + 1) % favicons.length;
}

// Set interval to change title and favicon every 2 seconds
setInterval(changeTabContent, 2000);
