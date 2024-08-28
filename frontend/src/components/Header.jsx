import { NavLink } from "react-router-dom"


const getActiveStyle = ({isActive}) =>({
    fontWeight: isActive ? "600" : "200",
    color: isActive ? "gray" : ""
});

function Header() {
  return (
    <div className="flex justify-center bg-gray-50 ">
        <header className=" text-gray-100 font-titillium mb-10">
                <nav className="flex space-x-8 py-2 px-10">
                    <button className="bg-gray-300 text-gray-100 px-2 py-1 rounded hover:bg-gray-200 hover:text-gray-400 shadow-sm transition duration-300">
                         <NavLink style={getActiveStyle} to="/">Home</NavLink>
                    </button> 
                    <button className="bg-gray-300 text-gray-100 px-2 py-1 rounded hover:bg-gray-200 hover:text-gray-400 shadow-sm transition duration-300">
                         <NavLink style={getActiveStyle} to="/experience">Experience</NavLink>
                    </button> 
                    <button className="bg-gray-300 text-gray-100 px-2 py-1 rounded hover:bg-gray-200 hover:text-gray-400 shadow-sm transition duration-300"> 
                        <NavLink style={getActiveStyle} to="/research">Research</NavLink>
                    </button> 
                    <button className="bg-gray-300 text-gray-100 px-2 py-1 rounded hover:bg-gray-200 hover:text-gray-400 shadow-sm transition duration-300">
                        <NavLink style={getActiveStyle} to="/news">News</NavLink>
                    </button> 
                    <button className="bg-gray-300 text-gray-100 px-2 py-1 rounded hover:bg-gray-200 hover:text-gray-400 shadow-sm transition duration-300">
                        <NavLink style={getActiveStyle} to="/projects">Projects</NavLink>
                    </button> 
                    <button className="bg-gray-300 text-gray-100 px-2 py-1 rounded hover:bg-gray-200 hover:text-gray-400 shadow-sm transition duration-300">
                        <NavLink style={getActiveStyle} to="/resume">Resume</NavLink>
                    </button> 
                </nav>
        </header>
    </div>
  )
}

export default Header