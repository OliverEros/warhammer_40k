
import 'tailwindcss/tailwind.css'
import Armies from '../components/armies';
import Header from '../components/header';
import Image from 'next/image';
import backgroundImage from '/public/Images/hero.jpeg';


import {Army} from '../lib/armies';

export default function Browser(){

    

    let description = "The Space Marines or Adeptus Astartes are foremost amongst the defenders of Humanity, the greatest of the Emperor of Mankind's warriors. They are barely Human at all, but superhuman; having been made superior in all respects to a normal man by a harsh regime of genetic modification, psycho-conditioning and rigorous training.";

    let props = {
        faction     : 'Space Marine',
        description : description,
        armies      : ['Ultramarines', 'Blood Angels', 'Dark Angels', 'Space Wolves', 'Imperial Fists', 'Salamanders', 'Raven Guard', 'White Scars', 'Iron Hands', 'Black Templars', 'Grey Knights', 'Crimson Fists', 'Silver Skulls', 'Mortifactors', 'Black Consuls', 'Celestial Lions', 'Death Spectres', 'Marines Errant', 'Fire Angels', 'Red Scorpions', 'Exorcists'],
        img         : '/Images/Factions/spacemarine.jpeg'
    };

    let army = new Army();

    

    return(
        <div>
            <Header props={{img : '/Images/background.jpg'}}/>
            <div className="flex items-center justify-center bg-cover">
              
                <div className="bg-gray-300 p-[150px] pt-[50px] mb-[50px] rounded-md shadow-2xl shadow-black flex flex-col">
                    
                    <Armies props={props}/>
                    <Armies props={props}/>
                    <Armies props={props}/>
                </div>
            </div>
        </div>
    );
}