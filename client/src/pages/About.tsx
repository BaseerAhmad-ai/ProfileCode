import { AboutMe } from "./AboutMe";
import { HireMe } from "./HireMe";
import { Skills } from "./Skills";

export function About(){
    return <section>
        <AboutMe/>
        <Skills/>
        <HireMe/>
    </section>
}