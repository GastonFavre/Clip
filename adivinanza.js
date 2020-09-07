var intentosMaximos = 4;
var intento = 1;
var respuesta_correcta = "salchicha";
var respuesta = document.getElementById("input_respuesta");
var restantes;
var inputfocused = "";


function doSomething()
{
    if( intento > 4 )
    {
        return false;
    }
    if(respuesta.value === respuesta_correcta)
    {
        alert("Respuesta correcta felicitaciones!");
        document.getElementById("miAlerta").style.display = 'none';
        document.getElementById("Adiv").style.display = "none";
        return true;
    }
    else{
        alert("Respuesta incorrecta!")
        restantes = intentosMaximos-intento;
        document.getElementById("input_respuesta").value = "";
        if(intento == 1)
        {
            document.getElementById("parrafoPista").innerHTML = "Pista 1: Lo puede encontrar en un pancho!";
            document.getElementById("intentos_p").innerHTML = "Te quedan "+restantes+" intentos!";
            document.getElementById("miAlerta").style.display = 'block';

        }
        if(intento == 2)
        {
            document.getElementById("parrafoPista").innerHTML = "Pista 2: Va muy bien con mostaza";
            document.getElementById("intentos_p").innerHTML = "Te quedan "+restantes+" intentos!";
        }
        if(intento == 3)
        {
            document.getElementById("parrafoPista").innerHTML = "";
            document.getElementById("intentos_p").innerHTML = "Ultimo intento!";
        }
        if(intento == 4)
        {
            document.getElementById("Adiv").style.display = "none";
            document.getElementById("miAlerta").classList.remove("alert-success")
            document.getElementById("miAlerta").classList.add("alert-danger")
            document.getElementById("intentos_p").innerHTML = "";
            document.getElementById("parrafoPista").innerHTML = "Has perdido!"
            return false;
        }
        intento++;
        return false;
    }
}


// var el = document.getElementById("clickAd");
// if(el.addEventListener)
//     el.addEventListener("click", doSomething, false);
// else if (el.attachEvent)
//     el.attachEvent('onclick', doSomething);

// document.getElementById("clickAd").onclick = doSomething();