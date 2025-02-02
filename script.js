const gitHub = document.querySelector(".github");
const twitter = document.querySelector(".twitter");

gitHub.addEventListener("click", () => {
  window.location.href = "https://github.com/R4heem-Orekoya";
});
twitter.addEventListener("click", () => {
  window.location.href = "https://x.com/Redoxx_Code";
});

function updateTime() {
  const now = new Date();
  document.getElementById("utc-time").textContent = now.toLocaleTimeString(
    "en-US",
    { timeZone: "UTC" }
  );
}
updateTime();
//   setInterval(updateTime, 1000);
