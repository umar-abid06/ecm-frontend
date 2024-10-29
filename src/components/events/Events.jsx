import { useStore } from "../../store";
import styles from "../../styles/styles";
import { EventCard } from "./";

const Events = () => {
  const { isLoading } = useStore();
  const allEvents = [];
  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className="w-full grid">
            {/* {allEvents.length !== 0 && (
              <EventCard data={allEvents && allEvents[0]} />
            )} */}

            <EventCard />

            {/* <h4>{allEvents?.length === 0 && "No Events have!"}</h4> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
