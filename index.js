function email(){
    let inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
   }

   function Submit(){
    let inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
   }

   function persistInput(email)
   {
     let key = "input-" + input.id;
   
     let storedValue = localStorage.getItem(key);

     let inputElement = document.getElementById("email");

     persistInput(inputElement);
   
     if (storedValue)
         input.value = storedValue;
   
     input.addEventListener('input', function ()
     {
         localStorage.setItem(key, input.value);
     });
   }

   
