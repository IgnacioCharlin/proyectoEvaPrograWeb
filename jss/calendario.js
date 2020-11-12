document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Vacuna 1',
                start: '2020-11-04',
                end:'2020-11-06'
            },
            {
                title: 'Vacuna 2',
                start: '2020-11-15',
            },
            {
                title: 'refuerzo',
                start: '2020-12-15'
            }
            ,
            {
                title: 'Vacuna 3',
                start: '2021-01-15'
            }
        ]
    }); 

    calendar.render();
  });