// registration form
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
      
        // question form
        var questions=[]
    
        function addQues() { 
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
               opt4: opt4
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
    function showTest() {
        var result=document.getElementById('box');
       document.getElementByIdinnerHTML= savedquestion.map((item ,i)=>`
       
       <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-amber-50">
    
            question:${i} <b>${item.question}</b> <br>
            a: ${item.opt1} <br>
            b: ${item.opt2} <br>
            c: ${item.opt3} <br>
            d: ${item.opt4} <br>
        </div>`
       ).join('')
       +`<button onClick="showtest()">Start Test</button><br>
       <div id="score"></div>`
       
       }

    //    quiz form
    ans=[]
    function showtest() {
        
        var result=document.getElementById('box');
       var savedquestion = JSON.parse(localStorage.getItem("questions")) //isse refresh krne pr bhi data show hoga iske na 
       result.innerHTML= savedquestion.map((item ,i)=>`
       <div class="p-8 shadow-blue-600 shadow-sm  rounded-2xl mb-5 bg-amber-50">
    
            question:${i} <b>${item.question}</b> <br>
              <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt1})}" /> a: ${item.opt1} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt2})}" /> b: ${item.opt2} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt3})}" /> c: ${item.opt3} <br>
            <input type='radio' name='${i}' onClick="{addOption(${i},${item.opt4})}" /> d: ${item.opt4} <br>
        </div>`
       ).join('')
       +`<button onClick="showresult()">Submit</button>`
       
       }
       
      function addOption(i,option){
          ans[i]=option
         console.log(ans)
      }
        function showresult(){
            var result=document.getElementById('score');
            var score=0;
            for(var i=0;i<savedquestion.length;i++){
                if(savedquestion[i].ans==ans[i]){
                    score++
                }
            }
            result.innerHTML=`Your score is ${score}`
        }