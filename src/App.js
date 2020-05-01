import React, { Component } from 'react'
import styles from './App.module.css'

import {Cards, Charts, CountryPicker} from './components/BaseComponent'
import {fetchData} from './api/index.api'
export default class App extends Component {

    state = {
        data: {},
        country: ''
     
    }
    async componentDidMount(){
        const Fetchdata = await fetchData()
        this.setState({data: Fetchdata})
     
    }
    handleCountryChange= async(country)=>{
        const Fetchdata = await fetchData(country)
        this.setState({data:Fetchdata,country:country})
    }

    render() {
        const {data, country} = this.state
        return (
            <div className={styles.container}>
                <h1><u>Covid-19</u></h1>
                <Cards data= {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}
