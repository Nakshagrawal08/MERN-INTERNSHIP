
import AboutContent from '../About/AboutContent'
import ProjectBox from './ProjectBox'


export function Project() {
     
   
  return (
        <div className=" bg-gray-800 justify-center mt-10">
            <div className=" ml-4 h-max py-10 lg:mx-24 md:my-16" id="projects" >
                <div className=" text-center">
                    <h1 className="text-4xl underline underline-offset-14 mb-10 place-content-center  decoration-blue-500">My Projects</h1>
                </div>
                <div class="flex flex-wrap justify-center gap-10">
                    <ProjectBox title='Web Design'/>
                    <ProjectBox title='Frontend with js'/>
                    <ProjectBox title='Frontend with React'/>
                </div>                
            </div>
        </div>           
         
   )
}
export default Project