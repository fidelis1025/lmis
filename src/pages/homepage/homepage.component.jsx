import React from 'react'


import GreenHeader from '../../components/header/header.component'
import SearchArea from '../../components/search-area/search-area.component'
import InfoBox from '../../components/info-box/info-box.component';
import ChartItems from '../../components/chart/chart.component';

const HomePage = () => (
<div>
    <GreenHeader/>
    <SearchArea/>
    <InfoBox/>
    {/* Come back and adjustthe box designs */}
    <ChartItems/>
</div>
);

export default HomePage;