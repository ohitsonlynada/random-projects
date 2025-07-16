let display = document.getElementById("display");
let btnMain = document.getElementById("btn-main");
let activities = [
    "Draw on black paper",
    "Doodle",
    "Paint a rock",
    "Read a book from the bookshelf (not an e-book)",
    "Graffiti",
    "Paint with acrylics",
    "Caricature",
    "Watercolor",
    "Calligraphy",
    "Expression drawing practice",
    "Try a new recipe from a cookbook (not online)",
    "Make a craft from Pinterest",
    "Make jewelry",
    "Organize something",
    "Balloon animals",
    "Programming project",
    "React tutorial",
    "Python tutorial",
    "Meditate",
    "Tai Chi",
    "Yoga",
    "Work on a puzzle",
    "Watch a TED Talk",
    "Practice Photography",
    "Write a short story",
    "Practice the guitar",
    "Practice the piano",
    "Draw a comic",
    "Draw a coloring page",
    "Work on your website",
    "Penmanship practice",
    "Write in your journal",
    "Work on your scrapbook",
    "Do a creative exercise"
];

btnMain.addEventListener("click", getActivity);
function getActivity() {
    display.innerHTML = (activities[(Math.floor(Math.random() * activities.length))]);
    display.classList.add("display-main");
};