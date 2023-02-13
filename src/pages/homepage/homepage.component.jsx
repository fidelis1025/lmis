import React from 'react'


import GreenHeader from '../../components/header/header.component'
import SearchArea from '../../components/search-area/search-area.component'
import InfoBox from '../../components/info-box/info-box.component';
import ChartItems from '../../components/chart/chart.component';
import LatestInfo from '../../components/latest-info/latest-info.component';
import EventsList from '../../components/events/events.component'


const HomePage = () => (
<div>
    <GreenHeader/>
    <SearchArea/>
    <InfoBox/>
    {/* Come back and adjustthe box designs */}
    <ChartItems/>
    <LatestInfo/>
    <EventsList/>
</div>
);

export default HomePage;