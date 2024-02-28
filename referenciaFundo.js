// recuperar ID do LocalStorage
let id = parseInt(localStorage.getItem('horario'));

// dados do Local Storage
let dataHours = JSON.parse(localStorage.getItem('containerHours')) || []; // ESOFT
let dataHoursADS = JSON.parse(localStorage.getItem('containerHoursADS')) || []; // ADSIS
console.log("funçaõ: ", dataHours);
console.log("funçaõ: ", dataHoursADS);

let items;

if(id <= dataHours.length){
    console.log('condution 1: id <= datahours.length', id);
    items = dataHours.find(containerHours => containerHours.id === id);
} else{
    console.log('condution 2: id <= datahours.length', id);
    items = dataHours.find(containerHours => containerHours.id === id);
}

console.log('como está o id: ', id);

if(items){   
    // item foi encontrado
    console.log('Horario encontrado: ', items);

    // alimentar os valores nos campos 
    $("#imagem-horario").attr('src', items.imgCurso);
    $("#nome-curso").html(items.curso);
    $("#sala-curso").html(items.sala);
}else{
    console.log('Horario não encontrado');
}