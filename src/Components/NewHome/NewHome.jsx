import React, { Component } from 'react'
import HomeNav from './HomeNav/HomeNav'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeServices from './HomeServices/HomeServices'
import HomeAchievements from './HomeAchievements/HomeAchievements'
import HomeContact from './HomeContact/HomeContact'
import Carousel from './Carousel/Carousel'
import NewCarousel from './NewCarousel/NewCarousel'
export default class NewHome extends Component {
  render() {
    return (
      <>
      <div style={{position : "relative"}}>

        <HomeNav/>
        <NewCarousel/>
      </div>
        {/* <Carousel/> */}
        {/* <HomeHeader/> */}
        <HomeServices/>
        <HomeAchievements/>
        <HomeContact/>
      </>
    )
  }
}
