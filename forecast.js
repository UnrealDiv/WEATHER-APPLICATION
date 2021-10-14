const apikey = 'YGQjSA21KlIHGgahAGGsJdGeh5OvQ8cM';

const base = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}`;



const getCity = async (city)=>{

    const query = `&q=${city}`;

    const request = await fetch(base+query);

    const data = await request.json();

    console.log(typeof(data[0].Key));

    return data[0].Key;



};


const getCurrentConditions = async (key)=>{

    const con = `https://dataservice.accuweather.com/currentconditions/v1/`;
    const result = `${con}${key}?apikey=${apikey}`;

    const request = await fetch(result);

    const data = await request.json();

    return data[0];

}



