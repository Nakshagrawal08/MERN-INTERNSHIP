// Registration form



var desg
// var Status = false;
function designation(des ,msg){
    desg=des;
    console.log(desg)
    // if(Status!=msg){
    //     Status=msg
    //     console.log(Status)

    // }
    // else if ( Status==msg){
    //     Status=false
    //     console.log(Status)
    // }
}
var datas=[]
       
        function register() { 
        var result=document.getElementById('box');
        var username = document.getElementById('username').value;
        var name = document.getElementById('name').value;
        var number = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
        var confirmPassword = document.getElementById('confirmPassword').value; 
        if (username == '' || name == '' || number == '' || email == ''||password == '' || confirmPassword == '') {
            //alert('Please enter username and password');
            console.log('Please enter details');
            result.innerHTML='Please enter details';
        }
        else if (password != confirmPassword) {
            console.log('Password does not match');
            result.innerHTML='Password does not match';
        }
        else if (username , name , number , email ,password ) {
         
            var data = {
               username: username,
               name: name,
               number: number,
               email: email,
               password: password,
               desig:desg
           }
              datas.push(data)
            localStorage.setItem('datas', JSON.stringify(datas))
            console.log(datas);
           
       };
       //window.location.href = './login.html';
         show()
    };
    function show() {
        console.log('working')
        var result=document.getElementById('box');
       var savedData = JSON.parse(localStorage.getItem("datas"))
       result.innerHTML= savedData.map((item , i)=>`
       <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-gray-700 text-neutral-100">
        Registration successful <br>
        ${i}
            Username: ${item.username} <br>
            Name: ${item.name} <br>
            Number: ${item.number} <br>
            Email: ${item.email} <br>
            designation:${item.desig}
        </div>`
       ).join('')
       }



      // LOGIN 



      function login(){

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var result=document.getElementById('box');
        datas = JSON.parse(localStorage.getItem("datas"))
        if (username == '' || password == ''|| desg=='') {
            //alert('Please enter username and password');
            console.log('Please enter username and password');
            result.innerHTML='Please enter username and password';
        }
            
            datas.map((item)=>{
            if (item.desig==desg && item.username==username && item.password==password ) {
                if(item.desig=="admin"){
                console.log('Login successful');
                //alert('Login successful');
                result.innerHTML='Login successful';
                window.location.href = './question.html';
            }

                if(item.desig=="student"){
                    console.log('Login successful');
                    //alert('Login successful');
                    result.innerHTML='Login successful';
                    window.location.href = './quiz.html';
                }
               
            }
            else{
                console.log('Login unsuccessful');
                //alert('Login successful');
                result.innerHTML='enter correct data';
            
            }
        })
       
}
  
    
    function showpassword() {
        var password = document.getElementById('password');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    }


        // question form



        var questions=[]
    
        function addQuetion() { 
        var result=document.getElementById('box');
        var question = document.getElementById('question').value;
        var opt1 = document.getElementById('opt1').value;
        var opt2 = document.getElementById('opt2').value;
        var opt3 = document.getElementById('opt3').value;
        var opt4 = document.getElementById('opt4').value;
    
        var ans = document.getElementById('ans').value; 
        if (question == '' || opt1 == '' || opt2 == '' || opt3 == ''||opt4 == '' || ans == '') {
            //alert('Please enter question and opt4');
            console.log('Please enter details');
            result.innerHTML='Please enter details';
        }
        else if (question , opt1 , opt2 , opt3 ,opt4 ) {
         
            var question = {
               
               question: question,
               opt1: opt1,
               opt2: opt2,
               opt3: opt3,
               opt4: opt4,
               ans:ans
           }
            questions.push(question)
            localStorage.setItem('questions', JSON.stringify(questions))
            console.log(question);
           
       }
       showques()
     
       
    
    }
    function showques() {
        var result=document.getElementById('box');
        questions= JSON.parse(localStorage.getItem("questions"))
       result.innerHTML= questions.map((item ,i)=>`
       
       <div class="p-8 shadow-blue-600 shadow-sm justify-between  rounded-2xl mb-5 bg-gray-700">
    
            question:${i+1} <b>${item.question}</b> <br>
            a: ${item.opt1} <br>
            b: ${item.opt2} <br>
            c: ${item.opt3} <br>
            d: ${item.opt4} <br>
            answer: ${item.ans} <br>
            
        </div>`
       ).join('')
       +`<a href="./quiz.html" class="p-2 bg-blue-400 rounded-xl ">Start Quiz</a><br>`+`
       <div id="score"></div>
      `
      
       }


    //    quiz form



    ans=[]
    function showTest() {
        
        var result=document.getElementById('box');
        questions = JSON.parse(localStorage.getItem("questions")) //isse refresh krne pr bhi data show hoga iske na 
       result.innerHTML= questions.map((item ,i)=>`             
       <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-gray-700">
    
            question:${i} <b>${item.question}</b> <br>
              <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt1})}" /> a: ${item.opt1} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt2})}" /> b: ${item.opt2} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt3})}" /> c: ${item.opt3} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt4})}" /> d: ${item.opt4} <br>
        </div>`
       ).join('')
       +`<button onClick="showresult()">Submit</button>
       `
       
       }
           
      function addOption(i,option){
          ans[i]=option
         console.log(ans)
      }
        function showresult(){
            
            questions = JSON.parse(localStorage.getItem("questions"))
             //isse refresh krne pr bhi data show hoga iske na c
             console.log('saved quues',questions)
            var result=document.getElementById('box');
            var score=0;
            var wrong=0;
            var skip=0;
            for(var i=0;i<questions.length;i++){
                console.log('working in loop')
                if(questions[i].ans==ans[i]){
                    console.log("working if condition")
                    console.log(questions[i].ans,ans[i])
                    score++
                }
                else if(ans[i]==undefined){
                    console.log("working else if condition")
                    console.log(questions[i].ans,ans[i])
                    skip++
                }
                else{   
                    console.log("working else condition")
                    console.log(questions[i].ans,ans[i])
                    wrong++
            }
        }
            result.innerHTML=`
            <div class="justify-center items-center flex h-screen">
            <div class="p-8 flex shadow-blue-600 shadow-sm  rounded-2xl mb-5 w-max  bg-gray-700">
            <div><h1 class=" text-2xl font-bold">Result</h1>
            <h3 class=" text-2xl font-bold"> Your score is ${score} out off ${questions.length} <br></h3>
            <h3 class=" text-2xl font-bold"> wrong answer: ${wrong} <br></h3>
            <h3 class=" text-2xl font-bold"> skiped questions: ${skip} <br> </h3></div>
            <div>
             <canvas id="myChart" class="   w-96 h-[20%]"></canvas>
            <div>
             </div>`
             
        const finalResult = ["correct", "wrong", "skip"];
        const yValues = [score,wrong,skip]; 
        const barColors = [
            '#b6fcd5',
            "#f88379",
            "#8ec3f4",
            
        ];

new Chart("myChart", {
  type: "pie",
  data: {
    labels : finalResult,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,

    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Overall Performance"
      
    }
  }
});

            
        }


        // quiz one by one


        var index
        function showQuiz(index) {
            
            var result=document.getElementById('box');
            questions = JSON.parse(localStorage.getItem("questions")) //isse refresh krne pr bhi data show hoga iske na 
              result.innerHTML= `    <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-gray-700">
              <h1> ${index+1} :${questions[index].question}</h1><br>
              <input type='radio' name='${index}' onClick="{addOption(${index},${questions[index].opt1})}" /> a: ${questions[index].opt1} <br>
              <input type='radio' name='${index}' onClick="{addOption(${index},${questions[index].opt2})}" /> b: ${questions[index].opt2} <br>  
              <input type='radio' name='${index}' onClick="{addOption(${index},${questions[index].opt3})}" /> c: ${questions[index].opt3} <br>
              <input type='radio' name='${index}' onClick="{addOption(${index},${questions[index].opt4})}" /> d: ${questions[index].opt4} <br>
            </div>`
            +
            `<div id="result"></div>`
            task=document.getElementById('result')
            if(index==0){
                console.log('condition entered')
                task.innerHTML=`
                <div class='flex'><button onClick="showQuiz(${index+1})" class="p-2 w-20 mx-3 bg-blue-500 m-2 rounded-xl" >Next</button> <br>
                <button onClick="showresult()" class="p-2 w-20 mx-3 bg-blue-500 m-2 rounded-xl" >Submit</button></div>`
            }
            else if(index+1<questions.length){
                console.log('condition entered')
                task.innerHTML=`<div class='flex'> 
                <button onClick="showQuiz(${index-1})" class="p-2 w-20 mx-3 bg-blue-500 m-2 rounded-xl" >previous</button><br>
                <button onClick="showQuiz(${index+1})" class="p-2 w-20 mx-3 bg-blue-500 m-2 rounded-xl" >Next</button> <br>
                <button onClick="showresult()" class="p-2 w-20 mx-3 bg-blue-500 m-2 rounded-xl" >Submit</button>
                </div>`
               
                }
            else{
                task.innerHTML= `<div class='flex'>
                <button onClick="showQuiz(${index-1})" class="p-2 w-20 mx-3 bg-blue-500 m-2 rounded-xl" >previous</button></div>
                <button onClick="showresult()" class="p-2 w-20 mx-3 bg-blue-500 m-2 rounded-xl" >Submit</button><br>
                       <div id="score"><div>`

            }
        }
        