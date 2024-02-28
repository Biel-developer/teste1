fetch('./ESOFT.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('containerHours', JSON.stringify(data));
        console.log('dados salvos diretamente no Local Storage');

        $(".container-hours").empty();
            
        setTimeout(() => {
          data.forEach((containerHours) => {
            var horarioHTML = `
              <div data-id="${containerHours.id}" class="card-hours">
                <div class="elements-card">
                  <div class="img-card">
                    <span><i class="ri-computer-line"></i></span>
                  </div>
                  <div class="text-salas">
                    <span>${containerHours.sala}</span>
                  </div>
                  <div class="button-elements">
                    <button>Ver horário</button>
                  </div>
                </div>
              </div>`;
            $(".container-hours").append(horarioHTML);
          });

          $(".button-elements").on('click', function() {
            var id = $(this).attr('data-id');
            localStorage.setItem('horario', id);
            window.location.href = './HorarioAulas.html';
        });

        }, 500);

    })
    .catch(error => console.log('erro ao fazer fetch dos dados: ' + error));

    fetch('./ADSIS.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('containerHoursADS', JSON.stringify(data));
        console.log('dados salvos diretamente no Local Storage');

        $(".container-hours-ads").empty();

        setTimeout(() => {
          data.forEach((containerHoursADS) => {
            var horarioADSHTML = `
              <div data-id="${containerHoursADS.id}" class="card-hours-ads">
                <div class="elements-card-ads">
                  <div class="img-card-ads">
                    <span><i class="ri-computer-line"></i></span>
                  </div>
                  <div class="text-salas-ads">
                    <span>${containerHoursADS.sala}</span>
                  </div>
                  <div class="button-elements-ads">
                    <button>Ver horário</button>
                  </div>
                </div>
              </div>`;
            $(".container-hours-ads").append(horarioADSHTML);
          });

          $(".button-elements-ads").on('click', function() {
            var id = $(this).attr('data-id');
            localStorage.setItem('horario', id);
            window.location.href = './HorarioAulas.html';
        });

        }, 500);

    })
    .catch(error => console.log('erro ao fazer fetch dos dados: ' + error));