import TaskBox from './TaskBox'


export function Task() {
     
   
  return (
        <div className=" bg-gray-800 justify-center mt-10">
            <div className=" ml-4 h-max py-10 lg:mx-24 md:my-16" id="tasks" >
                <div className=" text-center">
                    <h1 className="text-4xl underline underline-offset-14 mb-10 place-content-center  decoration-blue-500">My Tasks</h1>
                </div>
                <div class="flex flex-wrap justify-center gap-10">
                    <TaskBox title='Web Design'/>
                    <TaskBox title='Frontend with js'/>
                    <TaskBox title='Frontend with React'/>
                </div>                
            </div>
        </div>           
         
   )
}
export default Task