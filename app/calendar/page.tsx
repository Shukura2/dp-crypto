"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={true}
      droppable={true}
      dayMaxEvents={true}
      events="https://fullcalendar.io/api/demo-feeds/events.json?overload-day"
    />
  );
};

export default Calendar;
