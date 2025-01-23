import React, { Component } from 'react'
import HomeNav from './HomeNav/HomeNav'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeServices from './HomeServices/HomeServices'
import HomeAchievements from './HomeAchievements/HomeAchievements'
export default class NewHome extends Component {
  render() {
    return (
      <>
        <HomeNav/>
        <HomeHeader/>
        <HomeServices/>
        <HomeAchievements/>
      </>
    )
  }
}
