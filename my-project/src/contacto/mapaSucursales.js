let map;
let infos = [];

function initMap() {
  var center = { lat: -33.28580512938815, lng: -64.40728158250225 };
  var map = new google.maps.Map(document.getElementById("map"), {
    mapTypeControl: false,
    overviewMapControl: false,
    zoom: 6.6,
    center: center,
  });

  var sucursales = [
    {
      lat: -34.6905695162324,
      lng: -58.37557073375692,
      title: "Sucursal 1",
      address: "Calle Falsa 123, Ciudad 1, Provincia 1",
      phone: "123456789",
    },
    {
      lat: -32.891790170759585,
      lng: -68.85735496197181,
      title: "Sucursal 2",
      address: "Calle Falsa 456, Ciudad 2, Provincia 2",
      phone: "987654321",
    },
    {
      lat: -31.374757557487715,
      lng: -64.22750917971115,
      title: "Sucursal 3",
      address: "Calle Falsa 789, Ciudad 3, Provincia 3",
      phone: "123456789",
    },
    {
      lat: -32.93887536650115,
      lng: -60.65193003165895,
      title: "Sucursal 4",
      address: "Calle Falsa 101, Ciudad 4, Provincia 4",
      phone: "987654321",
    },
  ];

  var icon = {
    url: "../img/nonoLogo.svg", // URL de la imagen del pin personalizado
    scaledSize: new google.maps.Size(40, 40), // Tamaño de la imagen
  };

  sucursales.forEach(function (sucursal) {
    var marker = new google.maps.Marker({
      position: { lat: sucursal.lat, lng: sucursal.lng },
      map: map,
      title: sucursal.title,
      icon: icon,
    });

    var infowindow = new google.maps.InfoWindow({
      content: `<h3>${sucursal.title}</h3>
                <p>${sucursal.address}</p>
                <a href="https://api.whatsapp.com/send?phone=${sucursal.phone}" target="_blank">${sucursal.phone}</a>`,
    });

    infos.push(infowindow);

    marker.addListener("click", function () {
      closeAllInfos();
      infowindow.open(map, marker);
    });
  });
}

function closeAllInfos() {
  for (var i = 0; i < infos.length; i++) {
    infos[i].close();
  }
}
