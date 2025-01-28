setTimeout(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyChIXIBopSYa6KfoV6v8K0KrPj4nTVDBnA&callback=initMap';
    document.body.appendChild(script);

    let lastMarker = null;

    function initMap() {
      // Coordinates for your locations (Add more coordinates here)
      const locations = [
        { lat: 24.983843410362798, lng: 55.24280308042508 },
        { lat: 24.961246229812698, lng: 55.16317351558115 }, 
        { lat: 24.985360428886548, lng: 55.144682369636726 },
        { lat: 24.99329943639364, lng: 55.20242664957277 },
        { lat: 24.956834585482156, lng: 55.28612341542648}, 
        { lat: 24.990947191614655, lng: 55.093426210321425 },
        { lat: 24.99800379089829, lng: 55.18263787935154 },
        { lat: 24.993593463825842, lng: 55.20210224350357 },
        { lat: 25.086498, lng: 55.391174 }, 
        { lat: 25.148529, lng: 55.346643 }, 
        { lat: 25.246873, lng: 55.492888 },
        { lat: 25.205876, lng: 55.376158 },
        { lat: 25.161319, lng: 55.240681 },
        { lat: 25.091480, lng: 55.220332 },
        { lat: 24.877692259403865, lng: 55.19009921970639 } 
      ];

      const map = new google.maps.Map(document.getElementById("map1"), {
        zoom: 12, // Set zoom level to 12 for better visibility
        center: locations[0], // Center the map on the first location
      });

      const infowindow = new google.maps.InfoWindow(); // Create an InfoWindow object

      const myArray = [
        "https://res.cloudinary.com/rapiddata-technologies/image/upload/v1683108895/Icon_awesome_car_side_1__fs9t4a.svg",
        "https://res.cloudinary.com/rapiddata-technologies/image/upload/v1683109819/Icon_awesome_car_side_2__qzw07e.svg",
        "https://res.cloudinary.com/rapiddata-technologies/image/upload/v1684821095/download_6_iaq18u.svg"
      ];

      function pickRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      }

      // Loop through the locations array and add markers for each location
      locations.forEach((location, index) => {
        const marker = new google.maps.Marker({
          position: location,
          icon: pickRandomItem(myArray),
          map: map,
        });

        // InfoWindow for each marker
        const contentString = `
          <div>
            <h3>Location ${index + 1}</h3>
            <p>Latitude: ${location.lat}</p>
            <p>Longitude: ${location.lng}</p>
          </div>
        `;

        infowindow.setContent(contentString);
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      });
    }

    window.initMap = initMap;

  }, 1000);

