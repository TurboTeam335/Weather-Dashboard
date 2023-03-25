fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={7e157d1fe5c526376938186853cc69d4}')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// console.log'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={7e157d1fe5c526376938186853cc69d4}')