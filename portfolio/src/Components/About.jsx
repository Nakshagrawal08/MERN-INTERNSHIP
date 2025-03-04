import React from 'react'

function About() {
  return (
    <div>
        <div className="lg:flex  w-full mt-10 justify-center gap-10 px-4 px-[10%]">
        <div className=" md:w-2/3 rounded-2xl  ">
            <img src="/src/pictures/about2.jpg" className="rounded-2xl border-2 border-amber-50 border-solid md:shadow-gray-400 md:max-w-full  h-96 " alt="Nakshatra Agrawal"></img>
        </div>
        <div className=" md:2/3 lg:pl-16 " id="about">
            <h1 className="text-4xl w-2/3 under14ine underline-offset-8 decoration-blue-500">About Me</h1>
            <p className="mt-8  text-justify">Owning quick learning, teamworking, and leadership skills. To enhance the growth of my knowledge along with the development of technology is my <span className="font-bold">MAIN GOAL</span>.Also, looking forward to becoming an inspiration  for the youth generation in the upcoming 5 to 10 years.<br/><br className="font-bold"/>Thankyou</p>
                <div className="flex md:flex-col">
                    <div className="md:flex md:flex-wrap mt-3 mb-6">
                        <p className=" mr-16 mb-3 hover:underline hover:u14derline-offset-8 hover:decoration-blue-500 decoration-2">Skills</p>
                        <p className=" mr-16 mb-3 hover:underline hover:u14derline-offset-8 hover:decoration-blue-500 decoration-2">Experience</p>
                        <p className=" mr-16 mb-3 hover:underline hover:u14derline-offset-8 hover:decoration-blue-500 decoration-2">Education</p>
                    </div>
                    <div>
                        <div className="tabcontent activecontent" id="skills">
                            <ul >
                                <li ><span className="text-blue-400">Web Development</span><br/>Web App Development</li>
                                <li ><span className="text-blue-400">App Development</span><br/>Building Android apps</li>
                            </ul>
                        </div>
                        <div className="tabcontent" id="experience">
                            <ul >
                                <li ><span className="text-blue-400">2024-current</span><br/>ABC Company</li>
                                <li ><span className="text-blue-400">2022-2024</span><br/>XYZ Company</li>
                            </ul>
                        </div>
                        <div className="tabcontent" id="education">
                            <ul >
                                <li ><span className="text-blue-400">2022-2026</span><br/> Btech With CS Branch</li>
                                <li ><span className="text-blue-400">2021-2022</span><br/>High School With PCM+CS</li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            
        </div>
    </div>
      
    </div>
  )
}

export default About
