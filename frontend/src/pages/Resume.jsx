import { Link } from "react-router-dom"

function Resume() {
  return (
    <div className="bg-gray-50 space-x-24">
         <div className="bg-white shadow rounded flex mx-64 p-12">
              <div className="w-3/5 m-10">
                  <h2 className="font-bold text-3xl text-gray-700">Tanzimul Islam</h2>
                  <h3 className="font-bold text-xl pb-12 text-gray-600">Front-End Developer</h3>

                   {/* education */}
                  <div className="pb-3">
                      <h4 className="font-bold text-lg text-gray-600 pb-3">Education:</h4>
                      <ul className="font-bold text-sm text-gray-500">
                          <li className="font-bold text-md text-gray-600">
                            Bsc In Computing and information System
                          </li>
                          Daffodill international university, Dhaka, Bangladesh<br/>
                      
                          <li className="mr-2 text-gray-600 inline-block">
                          Graduation Date:
                          </li>
                          june 2027
                     </ul>
                  </div>

               
                  <div>
                        <h4 className="font-bold text-lg text-gray-600 pb-3">Projects:</h4>

                        <ul className="text-gray-500 text-sm font-bold pb-2">

                                <h4 className="font-bold text-md text-gray-600 pb-1">Portfolio Website</h4>
                            
                                <li className="mb-1">
                                  <span className="text-gray-600 mr-2"> 
                                        Description:
                                  </span> 
                                  Developed a personal portfolio using HTML, CSS, and JavaScript.     Showcases various projects with a responsive design.
                                </li>
                                <li className="mb-1 mr-2">
                                  <span className="text-gray-600 mr-2">
                                        Technologies Used:
                                  </span>
                                  HTML5, CSS3, JavaScript
                                </li>
                                <li className="mb-1"> 
                                  <span className="text-gray-600 mr-2">
                                      GitHub:
                                  </span> 
                                  <Link to="#">[Repository Link]</Link>
                                </li>  
                  
                        </ul>

                        <ul className="text-gray-500 text-sm font-bold pb-2">
                                 <h4 className="font-bold text-md text-gray-600 pb-1">E-commerce Product Page</h4>
                             
                                  <li className="mb-1">
                                        <span className="mr-2 text-gray-600"> Description:</span> 
                                        Created a dynamic product page for an e-commerce site with an interactive   gallery and shopping cart.
                                  </li>
                                  
                                  <li className="mb-1">
                                    <span className="mr-2 text-gray-600">
                                      Technologies Used:
                                    </span>
                                    React.js, Tailwind CSS
                                  </li>

                                  <li className="mb-1">
                                        <span className="mr-2 text-gray-600">
                                            GitHub: 
                                        </span>
                                        <Link to="#">[Repository Link]</Link>
                                  </li>
                             
                        </ul>

                        <ul className="text-gray-500 text-sm font-bold pb-2">

                              <h4 className="font-bold text-md text-gray-600 pb-1">Weather App</h4> 
                          
                              <li className="mb-1">
                                  <span className="mr-2 text-gray-600">Description:</span> 
                                  Built a weather forecasting app with API integration, displaying current weather and a 7-day forecast.
                              </li>
                        
                              <li className="mb-1">
                                  <span className="mr-2 text-gray-600">Technologies Used: </span>
                                  HTML, CSS, JavaScript
                              </li>
                              <li className="mb-1">    
                                  <span className="mr-2 text-gray-600">GitHub:</span> 
                                  <Link to="#">[Repository Link]</Link>
                              </li>
                        </ul>
                       
                        <ul className="text-gray-500 text-sm font-bold pb-2">
                             <h4 className="font-bold text-md text-gray-600 pb-1">Task Management Tool</h4> 
                              <li className="mb-1">
                              <span className="mr-2 text-gray-600">Description:</span> 
                              Developed a task management tool using React.js, with features like CRUD operations and local storage.
                            </li>
                            <li className="mb-1">
                                <span className="mr-2 text-gray-600">Technologies Used:</span>
                                React.js, CSS
                            </li>
                            <li className="mb-1">
                                <span className="mr-2 text-gray-600">GitHub:</span> 
                                <Link to="#">[Repository Link]</Link> 
                            </li>
                        </ul>


                   </div>
              </div>
              <div className="w-2/5 bg-gray-100 rounded p-8 mb-20">
                  
                  <div>

                     <ul className="font-bold text-sm text-gray-500 mb-3">
                        <h4 className="font-bold text-lg text-gray-600 pb-2">Contact Information:</h4>

                        <li className="mb-1">
                            <span className="text-md text-gray-600 mr-2">Phone:</span>
                              01825886681
                        </li>
                        <li className="mb-1">
                            <span className="text-md text-gray-600 mr-2">Email:</span>
                            tanzimul3islam@gmail.com
                          </li>
                        <li className="mb-1">
                              <span className="text-md text-gray-600 mr-2">LinkedIn:</span>
                              <Link to="">[LinkedIn Profile]</Link>
                        </li>
                        <li className="mb-1">
                              <span className="text-md text-gray-600 mr-2">GitHub:</span>
                              <Link to="#">[GitHub Profile]</Link>
                        </li>
                        <li className="mb-1">
                            <span className="text-md text-gray-600 mr-2">Portfolio:</span>
                            <Link to="#">[Portfolio Website]</Link>
                        </li>
                    </ul>
                  </div> 

                  <div>
                   
                    <ul className="font-bold text-sm text-gray-500 mb-3">
                    <h4 className="font-bold text-lg text-gray-600 pb-3">Skills:</h4>
                     
                          <li className="mb-1"> <span className="text-md text-gray-600 mr-2">Languages:</span> HTML, CSS, JavaScript, ES6+, C, Java</li>
                          <li className="mb-1"> <span className="text-md text-gray-600 mr-2">Frameworks/Libraries:</span> React.js, Bootstrap, Tailwind CSS</li>
                          <li className="mb-1"> <span className="text-md text-gray-600 mr-2">Design:</span> Figma,</li>
                          <li className="mb-1"> <span className="text-md text-gray-600 mr-2">Tools:</span> Git, GitHub, VS Code, NPM</li>
                          <li className="mb-1"> <span className="text-md text-gray-600 mr-2">Other:</span> Responsive Design</li>
                     </ul>

                     <div>
                         <ul className="font-bold text-sm text-gray-500 mb-3">

                           <h4 className="font-bold text-lg text-gray-600 pb-3">Relevant Coursework:</h4>

                           <li className="mb-1">Web Development</li>
                           <li className="mb-1">User Interface Design</li>
                           <li className="mb-1">Algorithms and Data Structures</li>
                           <li className="mb-1">Object Oreanted Programming</li>
                         </ul>
                     </div>

                  </div>
              </div>
         </div>
    </div>
  )
}

export default Resume