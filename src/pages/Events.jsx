import React from "react";
import EventCard from "../components/events/EventCard";
import Header from "../components/layout/header";
import LoadingComponent from "../components/LoadingComponent";
import { useStore } from "../store";

const EventsPage = () => {
  //   const { allEvents, isLoading } = useSelector((state) => state.events);
  const { events: allEvents, isLoading } = useStore();
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]} />
        </div>
      )}
    </>
  );
};

export default EventsPage;
