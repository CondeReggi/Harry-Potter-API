window.onload = function(){
    mostrar_logo_harryPotter();
}

function mostrar_logo_harryPotter(){
    let image = document.createElement("img");
    image.className = "logo_harry_potter";
    image.src = "Imagenes/hp.png";
    let cont = document.querySelector(".contenedor_personajes");
    eliminar_datos_div(cont);
    cont.appendChild(image);
    setTimeout(function(){ image.style.width = "100%" }, 725);
}

function getDatos(element){
    return fetch(`Datos/${element}.json`)
        .then(respuesta => respuesta.json()) //Indicamos formato en que se desea obtener info
        .then(respuesta => mostrar(respuesta))  //Mostramos dicha info en pantalla
}

function mostrar(elemento){
    let cont = document.querySelector(".contenedor_personajes");
    eliminar_datos_div(cont);

    elemento.forEach(element => {
        const {name, house, actor, image} = element;
        const personaje = document.createElement("div");
        personaje.className = "personaje";

        personaje.innerHTML =   `
                                <img class="w-100" src="${image} " alt="${name}">
                                <div class="persona_info d-flex justify-content-between text-white overflow-hidden">
                                    <div>
                                        <h3>${name}</h3>
                                        <p>${actor}</p>
                                        <p>${house}</p>
                                    </div>
                                </div>       
                                `;
        personaje.style.backgroundColor = cambiar_color(house);
        cont.appendChild(personaje);
    });
}

eliminar_datos_div = (div) => {
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

cambiar_color = (house) => {
    if (house === 'Slytherin'){
        return "rgb(82, 82, 54)"
    }else if(house === 'Gryffindor'){
        return "rgb(140, 43, 43)"
    }else if(house === 'Ravenclaw'){
        return "rgb(69, 67, 106)"
    }else if(house === 'Hufflepuff'){
        return "green"
    }else{
        return "gray"
    }
}
