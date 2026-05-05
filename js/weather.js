

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you leave in ", lat, lng);
}
function onGeoError() {
    alert("Can't find you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


