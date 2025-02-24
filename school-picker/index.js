let display = document.getElementById("display");
let btnMain = document.getElementById("btn-main");
let activities = [
    "Science",
    "Math",
    "ELA",
    "History",
    "PE",
    "Music"
];

btnMain.addEventListener("click", getActivity);
function getActivity() {
    display.innerHTML = (activities[(Math.floor(Math.random() * activities.length))]);
    display.classList.add("display-main");
};