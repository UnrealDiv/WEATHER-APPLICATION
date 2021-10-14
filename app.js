const form = document.querySelector('.form');
const input = document.querySelector('.form--input');
const temp = document.querySelector('.temp');
const unit = document.querySelector('.unit');
const figure = document.querySelector('.figure');
let cityname = document.querySelector('.city-name');

const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');

const box1= document.querySelector('.box--1');
const box2= document.querySelector('.box--2');
const box3= document.querySelector('.box--3');


form.addEventListener('submit',(e)=>{
   
    e.preventDefault();

    const city = form.city.value;
    cityname.innerText = city.toUpperCase();

    getCity(city).then(data=>{
        return getCurrentConditions(data);
    }).then(data1=>{
        console.log(data1);
      updateUI(data1);
    }).catch(err=>{console.log(err)});
    
});

const updateUI = (info)=>{

    const time = new Date(info.EpochTime * 1000);

    const hour = time.getUTCHours().toString();
    const minute = time.getUTCMinutes().toString();


    if(info.IsDayTime===true)
    {
        figure.setAttribute('src','day.jpg');
    }else{
        figure.setAttribute('src','night.jpg');
    }

    temp.innerText = info.Temperature.Metric.Value;
    unit.innerText = info.Temperature.Metric.Unit;
    box2.innerText = info.WeatherText;
    hours.innerText = hour;
   minutes.innerText = minute;
 


};