import React from 'react';
import GamingHistory from './GamingHistory';
import Facilities from './Facilities';
import Abouthero from './Abouthero';
import TeamSquad from './TeamSquad';
import CallToAction from '@/components/common/CallToAction';

const AboutPage = () => {
    return (
       <>
        <Abouthero />
        <Facilities />
        <GamingHistory />
        <TeamSquad />
        <CallToAction />
       </>
    );
};

export default AboutPage;