const scientists = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
];

const container = document.getElementById('scientists-container');

function renderScientists(scientists) {
    container.innerHTML = '';
    scientists.forEach(sci => {
        const div = document.createElement('div');
        div.classList.add('scientist');
        div.innerText = `${sci.name} ${sci.surname} (Born: ${sci.born}, Died: ${sci.dead})`;
        container.appendChild(div);
    });
}

renderScientists(scientists);

document.getElementById('btn19century').onclick = function() {
    const result = scientists.filter(sci => sci.born >= 1801 && sci.born < 1901);
    renderScientists(result);
};

document.getElementById('btnSumYears').onclick = function() {
    const totalYears = scientists.reduce((sum, sci) => sum + (sci.dead - sci.born), 0);
    alert(`Сума років: ${totalYears}`);
};

document.getElementById('btnSortAlpha').onclick = function() {
    const sorted = scientists.slice().sort((a, b) => a.surname.localeCompare(b.surname));
    renderScientists(sorted);
};

document.getElementById('btnSortYearsLived').onclick = function() {
    const sorted = scientists.slice().sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    renderScientists(sorted);
};

document.getElementById('btnRemoveOld').onclick = function() {
    const result = scientists.filter(sci => sci.born >= 1701);
    renderScientists(result);
};

document.getElementById('btnLatestBorn').onclick = function() {
    const latest = scientists.reduce((prev, curr) => (curr.born > prev.born ? curr : prev));
    alert(`Найпізніше народжений: ${latest.name} ${latest.surname}`);
};

document.getElementById('btnFindEinstein').onclick = function() {
    const einstein = scientists.find(sci => sci.name === "Albert" && sci.surname === "Einstein");
    alert(`Альберт Ейнштейн народився у ${einstein.born} році.`);
};

document.getElementById('btnSurnameC').onclick = function() {
    const result = scientists.filter(sci => sci.surname.startsWith("C"));
    renderScientists(result);
};

document.getElementById('btnRemoveA').onclick = function() {
    const result = scientists.filter(sci => !sci.name.startsWith("A"));
    renderScientists(result);
};

document.getElementById('btnMaxMinLived').onclick = function() {
    const max = scientists.reduce((a, b) => ((b.dead - b.born) > (a.dead - a.born) ? b : a));
    const min = scientists.reduce((a, b) => ((b.dead - b.born) < (a.dead - a.born) ? b : a));
    alert(`Найдовше прожив ${max.name} ${max.surname}, найменше - ${min.name} ${min.surname}`);
};

document.getElementById('btnMatchingLetters').onclick = function() {
    const result = scientists.filter(sci => sci.name[0] === sci.surname[0]);
    renderScientists(result);
};

document.getElementById('btnAll19').onclick = function() {
    const allWorkedIn19 = scientists.every(sci => sci.born >= 1801 && sci.born < 1901);
    alert(`Всі працювали в 19 ст.: ${allWorkedIn19}`);
};
