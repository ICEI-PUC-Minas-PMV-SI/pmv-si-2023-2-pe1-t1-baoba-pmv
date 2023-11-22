// async function getWeather(cityName) {
//     const apiKey = "URxcFf1r5aSADU25ieYX4gGlGA3l929u";
//     const localKey = 'CIDADE_LOCAL_KEY';

//     const url = `http://dataservice.accuweather.com/currentconditions/v1/${localKey}?apikey=${apiKey}&language=pt-br&details=true`;

//     fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Erro na solicitação da API');
//       }
//       return response.json();
//     })
//     .then(data => {
//       displayWeather(data);
//     })
//     .catch(error => {
//       console.error('Erro ao acessar a API do AccuWeather:', error);
//       document.getElementById('weather-container').innerHTML = 'Erro ao carregar dados.';
//     });
  
//   function displayWeather(data) {
//       const container = document.getElementById('weather-container');
//   }
// }

//curl -X GET

// Chapada Diamantina - localkey(2301201) - http://dataservice.accuweather.com/currentconditions/v1/2301201?apikey=URxcFf1r5aSADU25ieYX4gGlGA3l929u&language=pt-BR&details=true
// Alter do Chão - localkey(39623) - http://dataservice.accuweather.com/currentconditions/v1/39623?apikey=URxcFf1r5aSADU25ieYX4gGlGA3l929u&language=pt-br&details=true
// Serra Canastra - localkey(2306475)  - http://dataservice.accuweather.com/currentconditions/v1/2306475?apikey=URxcFf1r5aSADU25ieYX4gGlGA3l929u&language=pt-br&details=true
// Bonito - localkey(38831)   - http://dataservice.accuweather.com/currentconditions/v1/38831?apikey=URxcFf1r5aSADU25ieYX4gGlGA3l929u&language=pt-br&details=true
// Chapada dos Veadeiros - localkey(33342)   - http://dataservice.accuweather.com/currentconditions/v1/33342?apikey=URxcFf1r5aSADU25ieYX4gGlGA3l929u&language=pt-br&details=true
// Jalapão - localkey(2298417)   - http://dataservice.accuweather.com/currentconditions/v1/2298417?apikey=URxcFf1r5aSADU25ieYX4gGlGA3l929u&language=pt-br&details=true
// Parque do Itatiaia - localkey(35628)   - http://dataservice.accuweather.com/currentconditions/v1/35628?apikey=URxcFf1r5aSADU25ieYX4gGlGA3l929u&language=pt-br&details=true