import React, {useEffect, useState} from 'react'
import {FormControl , NativeSelect} from '@material-ui/core'


import {fetchCountries} from '../../api/index.api'
import styles from './countryPicker.module.css'




const CountryPicker = ({handleCountryChange}) => {
    const [Countries, setcountries] = useState([])
    useEffect(()=>{
        const Fetchcountry = async() => {
            setcountries(await fetchCountries())
        }
        Fetchcountry()
    },[setcountries])

 
    return (
        <FormControl className={styles.FormControl} >
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="" >Global</option>

                {Countries.map((country,i)=>(
                    <option key = {i} value={country}>{country}</option>
                ))}

                
            </NativeSelect> 
        </FormControl>
    )
}

export default CountryPicker