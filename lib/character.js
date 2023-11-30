/**
 * Describes a unqiue character - used in the 'armies.js' file fir now. //REVIEW
 */



export default class Character{

    count;  //Number of figure / unit.
    pVal;   //Point Value
    mov;
    wSkill;
    bSkill;
    str;    //Strenth 
    toughness;
    wounds;
    attacks;
    ldsh;   //Leadership
    sv;     //Save


    constructor(props){

        if(props){
            this.name       = props.name;

            this.count      = props.model_count;
            this.pVal       = props.points_value;
            this.mov        = props.movement;
            this.wSkill     = props.weapon_skill;
            this.bSkill     = props.ballistic_skill;
            this.str        = props.strength;
            this.toughness  = props.toughness;
            this.wounds     = props.wounds;
            this.attacks    = props.attacks; 
            this.ldsh       = props.leadership;
            this.sv         = props.save;
        }

       
    }

    getCharacter(){
        return this.name;
    }

}