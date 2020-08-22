var map = L.map('main_map').setView([4.6482837,-74.2478962], 11);
var m = L.marker([4.7024099,-74.1116055]).addTo(map)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

