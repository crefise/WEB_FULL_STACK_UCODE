let cityname = 'Kharkiv';
let APIkey = '3f60a463914eefec15f79e13b60c21bc';

function formatDate(date) {
    return date.slice(8, 10) + "." + date.slice(5, 7);
}


 var response = fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIkey}`).then(resp => {return resp.json()}).then(data => { 
    let take_date = document.getElementsByClassName("data_day");
    let take_temperature = document.getElementsByClassName("temperature_day");
    let take_img = document.getElementsByClassName('img_day')
    for (let index = 0; index < take_date.length; index++) {
       take_date[index].innerHTML = formatDate(data.list[index*8].dt_txt);
       take_temperature[index].innerHTML = String(Math.round(Number(data.list[index*8].main.temp) - Number(273))) + '°';    
       console.log(data.list[index*8].weather[0]);
       if (data.list[index*8].weather[0].main == 'Rain') {
           take_img[index].childNodes[0].src = 'https://img2.freepng.ru/20180705/zks/kisspng-rain-cloud-silhouette-5b3e934d35d426.5406614115308275972205.jpg'
       }
       else if (data.list[index*8].weather[0].main == 'Clouds') {
        take_img[index].childNodes[0].src = 'https://img2.freepng.ru/20180520/tgc/kisspng-computer-icons-fog-cloud-download-mist-5b011fe77dce21.3980283015268003595153.jpg'
    }
    else if (data.list[index*8].weather[0].main == 'Clear') {
        take_img[index].childNodes[0].src = 'https://w7.pngwing.com/pngs/752/373/png-transparent-computer-icons-net-sunlight-monochrome-black-silhouette.png'
    }
    else if (data.list[index*8].weather[0].main == 'Snow') {
        take_img[index].childNodes[0].src = 'https://w7.pngwing.com/pngs/292/138/png-transparent-weather-forecasting-snow-weather-blue-winter-cloud.png'
    }
    else {
            take_img[index].childNodes[0].src = 'https://images-na.ssl-images-amazon.com/images/I/71rH6PWG7ML._SY355_.jpg'
       }
    }
    console.log(data);
    
 });

