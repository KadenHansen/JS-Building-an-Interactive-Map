// create map
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});

// add openstreetmap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap)

// create and main add geolocation marker
var marker = L.marker([48.87007, 2.346453]).addTo(myMap)

// draw the 2nd arrondissement
var coords = [
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813], 
    [48.86834104280146, 2.330308418109664]
]

var polygon = L.polygon(coords, {color: "blue", fill: false}).addTo(myMap)

// create red pin marker
let myIcon = L.icon({
    iconUrl: "./assets/red-pin.png",
    iconSize: [38, 38],
    anchor: [19, 38]
})

L.marker([])

// metro station markers
const rS = L.marker([48.866200610611926, 2.352236247419453], {icon: myIcon}).bindPopup('Réaumur-Sébastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196], {icon: myIcon}).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739], {icon: myIcon}).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167], {icon: myIcon}).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543], {icon: myIcon}).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714], {icon: myIcon}).bindPopup('Grands Boulevards')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)