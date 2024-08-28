import { FaEnvelope,FaLinkedin,FaSearchLocation,FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";

import Profile from '../assets/picture/tanzimul.jpg';

export default function Home() {
  return (
    <div className="bg-gray-50 font-Cascadia">
      <section className=" pb-3">
        <div className="flex flex-col items-center ">
             <img src={Profile} alt="image" height={200} width={200} className=" border border-white rounded-full"/>
            <div className="mt-4">
                 <h3 className="text-gray-700 text-lg font-bold">Name: Tanzimul Islam</h3>
            </div>
        </div>
      </section>

      <section className=" text-gray-600 text-sm font-bold tracking-wider text-justify px-80">
        <div className="container">
          <p className="pb-2">👋 I’m Tanzimul Islam, currently i am studing bsc in computing and information system  at daffodil international university and working as a IT speacalitys in boisob, I completed my 
            HSC from saidpur lions school and college  and SSC from nilphamary govt high school. . I love problem solving. I love working on real world problems that have an impact, and obsess myself till I find a solution. I also regularly participate in programming competitions .
          </p>
          <p>In an alternate universe, I would have been a political scientist. The mysteries of history and geopolitics have always captivated me. In my free time, I ponder upon the vastness of creation and the greatness of the creator. I am a foodie and love trekking.</p>
        </div>
      </section>
      <section className="text-gray-600 text-sm font-bold tracking-wider text-justify px-80">
              <div className="flex space-x-6 py-2 text-3xl pb-8">
                  <Link className="hover:text-gray-500 transition duration-300" to="#" ><FaEnvelope/></Link>
                  <Link className="hover:text-gray-500 transition duration-300" to="#" ><FaLinkedin/></Link>
                  <Link className="hover:text-gray-500 transition duration-300" to="#" ><FaGithub/></Link>

                  <Link className="hover:text-gray-500 transition duration-300" to="#" ><FaSearchLocation/></Link>
              </div>
      </section>
    </div>
  )
}
