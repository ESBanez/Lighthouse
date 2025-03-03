import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../Sass/calendar.css"; // Example CSS file

function Calendar() {

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const events = [
  

    { title: 'Araw ng Kagitingan', date: '2025-04-09'},
  ];

  const getMonthNameAndDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short' }; // Use 'short' to get abbreviated month name
    const month = new Intl.DateTimeFormat('en-US', options).format(date);
    const day = date.getDate();
    return { month, day };
  };

  const renderCards = events.map((event, index) => {
    const { month, day } = getMonthNameAndDate(event.date);
    return (
      <div className="cardupdate" key={index}>
        <div className="carddate">
          <div className="carddatemonth">
            {month}
          </div>
          <div className="carddatenumber">
            {day}
          </div>
        </div>
        <div className="cardupdatetitle">
          {event.title}
        </div>
      </div>
    );
  });

  const handleEventClick = (info) => {
    alert('Event: ' + info.event.title);


    // change the border color just for fun
    info.el.style.borderColor = 'red';
  };

  return (
    <div className="updatescontainer">
      <div className="companyupdates">
        STAY <div className="informed">INFORMED</div> WITH OUR LATEST UPDATES
      </div>
      <hr />
      <br />
      <br />

      <div className="calendar-container">
        <div className="calen calendaryo">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{}}
            height="100%"
          />
        </div>
        <div className="calen announces">
          <div className="annoucestitle">
            <div className="announcestitlenews announcestitles">
              LHI-
            </div>
            <div className="announcestitleupdate announcestitles">
               UPDATES
            </div>
          </div>
          <br />
          <br />
          {renderCards}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
