/**NOTE
 * 
 * Simple box with information about a given army.
 * 
 *      Image of them.
 *      On click, expand a list
 *      
 * 
 * 
 * 
 */
import Image from 'next/image'
import styles from '../styles/Armies.module.css';
import { useState } from 'react';



const Armies = ({ props }) => {


    const faction = props.faction;
    const armies = props.armies;
    const description = props.description;


    const [isScaled, setScale] = useState(false); //Removes transition class when the explore button is clicked.
    const [btnText, setBtn] = useState('Explore');



    //Removes/adds the 'scale:110' class when the 'Explore' btn is clicked.
    const setScaled = () => {
        setScale(!isScaled);
    };

    //Changes the value for the 'Explore' btn.
    const changeButton = () => {
        btnText == 'Explore' ? setBtn('Close') : setBtn('Explore');

    };

    return (

        <div className={`max-w-sm w-full lg:max-w-full mb-[150px]   ${isScaled ? 'transform transition lg:hover:scale-110' : ''} `}>
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="lg:h-96 sm:h-96 lg:w-64 sm:w-auto flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden relative">
                    <Image
                        src={props.img}
                        layout={"fill"}
                        className="relative "
                    />
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex items-stretch flex-col justify-between leading-normal ">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl mb-2 sm:text-center">{faction}</div>
                        <p class="text-gray-700 lg:w-96 sm:text-center lg:text-left ">{description}</p>
                    </div>
                    <button onClick={() => { setScaled(); changeButton() }} className="self-start sm:self-center lg:self-start  bg-blue-600 p-4 rounded-lg">{btnText}</button>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white  border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            btnText == 'Close' ? (
                                armies.map((army) => (
                                    <tr key={army}>
                                        <td class="py-2 px-4 border-b hover:bg-blue-700 text-center">{army}</td>
                                    </tr>
                                ))
                            ) : null
                           
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Armies;