import React from "react";
import EventCard from "../components/events/EventCard";
import Header from "../components/layout/header";
import LoadingComponent from "../components/LoadingComponent";
import { useStore } from "../store";
import Footer from "../components/layout/footer";

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
          <Footer />
        </div>
      )}
    </>
  );
};

export default EventsPage;
