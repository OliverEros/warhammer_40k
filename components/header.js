/**
 * 
 * Header component at the top of the page.
 */

import Image from "next/image";

export default function Header({props}) {

    let routes = ['Home', 'Army Creator'];


    return (
        <header className="p-3">
            <div className="w-full md:h-[40rem] sm:h-20 rounded relative mb-3 bg-cover" >
                <Image 
                    src={props.img ? props.img : "/Images/background.jpg" }
                    className="bg-cover"
                    fill
                     />
            </div>

            <ul class="flex border-b">

                {
                    routes.map((page) => {
                        return(
                            <li class="-mb-px mr-1">
                                <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">{page}</a>
                            </li>
                        );
                    })
                }
               
            </ul>
        </header>

    );
}