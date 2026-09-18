const USC = [34.022415, -118.285530];
const Home = [50.7867, 4.4168];
const NYC = [40.7128, -74.0060];

const map = L.map("map").setView(USC, 13);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
}).addTo(map);

L.marker(USC).addTo(map).bindPopup("USC - My University");
L.marker(Home).addTo(map).bindPopup("Brussels, Belgium - My Hometown");
L.marker(NYC).addTo(map).bindPopup("New York City - My Current City");

function showGISInterest() {
    const output = document.getElementById("gis-output");
    output.textContent = 
        "I enjoy GIS in the context of environmental remediation and urban planning because I strive to make our world more liveable and sustainable. I especially enjoy using spatial data to understand real-world problems as it provides concrete evidence of the issues we face and allows us to make informed decisions about how to address them. Lastly, I love to combine spatial analysis with my love for creativity, resulting in visualization techniques to communicate analyses and potential solutions."
}

const gisButton = document.getElementById("gis-button");
gisButton.addEventListener("click", showGISInterest);

const homeButton = document.getElementById("home-button");
const statusText = document.getElementById("status");

homeButton.addEventListener("click", function() {
    map.flyTo(Home,11);
    statusText.textContent = "Flying to My Hometown!";
}
);

const uscButton = document.getElementById("usc-button");
const statusText2 = document.getElementById("status2");

uscButton.addEventListener("click", function() {
    map.flyTo(USC,13);
    statusText2.textContent = "Flying to USC!";
}
);

const nycButton = document.getElementById("nyc-button");
const statusText3 = document.getElementById("status3");

nycButton.addEventListener("click", function() {
    map.flyTo(NYC,11);
    statusText3.textContent = "Flying to New York City!";
}
);  