import axios from 'axios'
const url = 'https://covid19.mathdro.id/api';


export const fetchData = async(country) => {
    let changableurl = url
    if(country) changableurl = `${url}/countries/${country}`
    try{
        const {data: {confirmed, recovered,deaths,lastUpdate}} = await axios.get(changableurl)
      
        const response = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return response
    }
    catch(error){
        console.log(error)
    }
}

export const fetchDataDaily = async() => {
    try{
        const {data} = await axios.get(`${url}/daily`)
        
        const response = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
  
        return response
    }
    catch(error){
        console.log(error)
    }
}

export const fetchCountries = async() => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        
        
  
        return countries.map(country=>country.name)
    }
    catch(error){
        console.log(error)
    }
}