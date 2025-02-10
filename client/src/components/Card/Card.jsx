import { Link } from "react-router-dom";

import Avatar01 from "../../assets/avatar-01.jpg";
import Avatar02 from "../../assets/avatar-02.jpg";
import Avatar03 from "../../assets/avatar-03.jpg";
import Avatar04 from "../../assets/avatar-04.jpg";

import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";

import "./Card.css";

const Card = ({ event }) => {
  const { author, name, description, created_at, dates } = event;
  const attendeesLength = dates?.[0]?.attendees?.length ?? 0;

  return (
    <div className="card">
      <div className="header">
        <div className="user">
          <img src={Avatar01} alt="Profile picture" />
          <div className="detail">
            <h4>{author}</h4>
            <p>{author}@doodie</p>
          </div>
        </div>
        <div className="postdate">
          <p>
            {new Date(created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}
          </p>
        </div>
      </div>
      <div className="body">
        <Link to={`/api/events/${event.id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
      </div>
      <div className="schedule">
        <ul>
          <li className="arrow">
            <img src={ArrowLeft} alt="Left Arrow" />
          </li>
          {dates ? (
            dates.map(
              (date, index) =>
                index < 3 && (
                  <li key={index}>
                    <time datetime={date.date}>
                      <span className="month">
                        {new Date(date.date).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>
                      <span className="day">
                        {new Date(date.date).toLocaleDateString("en-US", {
                          day: "2-digit",
                        })}
                      </span>
                    </time>
                  </li>
                )
            )
          ) : (
            <p>No dates available</p>
          )}
          <li className="arrow">
            <img src={ArrowRight} alt="Right Arrow" />
          </li>
        </ul>
      </div>
      <div className="hr"></div>
      <div className="footer">
        <div className="attendees">
          <div className="attendee">
            <img src={Avatar04} alt="Profile picture" />
          </div>
          <div className="attendee">
            <img src={Avatar02} alt="Profile picture" />
          </div>
          <div className="attendee">
            <img src={Avatar03} alt="Profile picture" />
          </div>
          <div className="count">
            <div className="circle">
              <span>{attendeesLength}</span>
            </div>
          </div>
        </div>
        <button className="join">Join</button>
      </div>
    </div>
  );
};

export default Card;
