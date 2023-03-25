        // Automatic Slideshow - change image every 4 seconds
        var myIndex = 0;
        var myIndexText = 0;
        carousel();
        textSlides();

        //Opacity change for slide show on small screens
        var imagenes = document.getElementsByClassName("mySlides-images");

        if(screen.availWidth <= 600){
            for(i = 0; i < imagenes.length; i++){
                imagenes[i].style.opacity = 1;
            } 
            document.getElementById("inicio-navText-small").innerHTML = "Facundo Contreras - Mitre 417, Trelew";
        }

        if(screen.availWidth <= 370){
            //correccion de texto segun pantalla para alinear la barra
            document.getElementById("inicio-navText-small").innerHTML = "Facundo Contreras. Mitre 417, Trelew";   
        }

        //correccion de posicionamiento de la consulta del form
        if(screen.availWidth > 600){
            var consultaTextField = document.getElementById("consulta");
            consultaTextField.classList.remove("w3-half");
        }

        //slides
        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }
            myIndex++;
            if (myIndex >= x.length) { myIndex = 0 }
            x[myIndex].style.display = "block";
            setTimeout(carousel, 5000);
        }

        //text slides
        function textSlides() {
            var i;
            var x = document.getElementsByClassName("myTextSlides");
            

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }
            myIndexText++;
            if (myIndexText >= x.length) { myIndexText = 0 }
            x[myIndexText].style.display = "block";
            setTimeout(textSlides, 6000);
        }
        // Used to toggle the menu on small screens when clicking on the menu button
        function myFunction() {
            var x = document.getElementById("navDemo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        }

        function abrirFallo(x){
            window.open("media/fallos/"+x+".pdf");
        }

        //validador de inputs del form para que no estén vacíos
        function validateForm(campo) {
            let x = document.forms.contactForm[campo].value;
            if (x == "") {
                return false;
                }
            else return true;
        }

        function validateFormEmail(inputText){
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(inputText.value.match(mailformat)){
                return true;
            }
            else{
                return false;
                }
        }

        //función general de botón del form contacto
        function validateFormGeneral(){
            x = validateForm("Name") && validateFormEmail(document.forms.contactForm.Email) && validateForm("Message");
            
            if(x == true) document.getElementById('ticketModal').style.display='block';

        }

 
        // When the user clicks anywhere outside of the modal, close it
        var modal = document.getElementById('ticketModal');
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

       