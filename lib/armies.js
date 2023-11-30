/**
 * 
 * Used to process the JSON files in the 'public/json' filder.
 * 
 * 
 */

import data from '/public/json/armies.json';
import Character  from './character';

export class Armies{

    json;
    name;
    faction;
    numChar; //Number of unique characters / army.

    //List of characters
    arm
    

    constructor(props) {

        if(props){

            this.json       = props.json;

            this.name       = props.name;
            this.faction    = props.faction;
            this.army       = [];


        }
        
    }


    addCharacter(stats){
        if(stats){
            let character = new Character(stats);
            this.army.push(character);
        }
    }
}