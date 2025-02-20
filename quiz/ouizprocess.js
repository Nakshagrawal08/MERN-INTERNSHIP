// Registration form



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
               password: password
           }
              datas.push(data)
            localStorage.setItem('datas', JSON.stringify(datas))
            console.log(data);
           
       };
         show()
    };
    function show() {
        console.log('working')
        var result=document.getElementById('box');
       var savedData = JSON.parse(localStorage.getItem("datas"))
       result.innerHTML= savedData.map((item , i)=>`
       <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-amber-50">
        Registration successful <br>
        ${i}
            Username: ${item.username} <br>
            Name: ${item.name} <br>
            Number: ${item.number} <br>
            Email: ${item.email} <br>
        </div>`
       ).join('')
       }



      // LOGIN 




      function login() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var result=document.getElementById('box');
        datas = JSON.parse(localStorage.getItem("datas"))
        if (username == '' || password == '') {
            //alert('Please enter username and password');
            console.log('Please enter username and password');
            result.innerHTML='Please enter username and password';
        }
        datas.map((item)=>{
            console.log('login process')
            console.log(item.username,item.password)
        if (username == item.username && password == item.password) {
           console.log('Login successful');
           alert('Login successful');
            window.location.href = './question.html';
           
       }
       else {
        console.log('Login failed');
        //alert('Login failed');
          result.innerHTML='Login failed';
   }
 
    })


        
    }
    function show() {
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
       question.value='';
        opt1.value='';
        opt2.value='';
        opt3.value='';
        opt4.value='';
        ans.value='';;
       
    
    }
    function showques() {
        var result=document.getElementById('box');
        questions= JSON.parse(localStorage.getItem("questions"))
       result.innerHTML= questions.map((item ,i)=>`
       
       <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-amber-50">
    
            question:${i} <b>${item.question}</b> <br>
            a: ${item.opt1} <br>
            b: ${item.opt2} <br>
            c: ${item.opt3} <br>
            d: ${item.opt4} <br>
            answer: ${item.ans} <br>
        </div>`
       ).join('')
       +`<a href="./quiz.html" class="p-2 bg-blue-400 rounded-xl " />Start Quiz
       <div id="score"></div>`
      
       }


    //    quiz form



    ans=[]
    function showTest() {
        
        var result=document.getElementById('box');
        questions = JSON.parse(localStorage.getItem("questions")) //isse refresh krne pr bhi data show hoga iske na 
       result.innerHTML= questions.map((item ,i)=>`             /*i is used to show the index of the question*/
       <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-amber-50">
    
            question:${i} <b>${item.question}</b> <br>
              <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt1})}" /> a: ${item.opt1} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt2})}" /> b: ${item.opt2} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt3})}" /> c: ${item.opt3} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt4})}" /> d: ${item.opt4} <br>
        </div>`
       ).join('')
       +`<button onClick="showresult()">Submit</button>
       <div id="score"><div>`
       
       }
           
      function addOption(i,option){
          ans[i]=option
         console.log(ans)
      }
        function showresult(){
            questions = JSON.parse(localStorage.getItem("questions"))
             //isse refresh krne pr bhi data show hoga iske na c
             console.log('saved quues',questions)
            var result=document.getElementById('score');
            var score=0;
            for(var i=0;i<questions.length;i++){
                console.log('working in loop')
                if(questions[i].ans==ans[i]){
                    console.log("working if condition")
                    console.log(questions[i].ans,ans[i])
                    score++
                }
            }
            result.innerHTML=`Your score is ${score} out off ${questions.length}`
        }


        // quiz one by one


        var index
        function showQuiz(index) {
            
            var result=document.getElementById('box');
            questions = JSON.parse(localStorage.getItem("questions")) //isse refresh krne pr bhi data show hoga iske na 
              result.innerHTML= `    <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-amber-50">
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
                task.innerHTML=`<button onClick="showQuiz(${index+1})">Next</button> <br>`
            }
            else if(index+1<questions.length){
                console.log('condition entered')
                task.innerHTML=`<button onClick="showQuiz(${index+1})">Next</button> <br>
                <button onClick="showQuiz(${index-1})">previous</button>`
               
                }
            else{
                task.innerHTML= `<button onClick="showresult()">Submit</button><br>
                <button onClick="showQuiz(${index-1})">previous</button>
                       <div id="score"><div>`

            }
        }