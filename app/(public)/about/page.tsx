import AboutHero from "@/src/components/aboutComp/AboutHero";
import GameLandingHistory from "@/src/components/aboutComp/GameLandingHistory";
import TeamSquad from "@/src/components/aboutComp/TeamSquad";

const page = () => {
    return (
        <div>
           <AboutHero />
           <GameLandingHistory />
            <TeamSquad />
        </div>
    );
};

export default page;