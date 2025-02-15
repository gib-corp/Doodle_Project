import { Link } from "react-router-dom";
import Avatar01 from "../../assets/avatar-01.jpg";
import Avatar02 from "../../assets/avatar-02.jpg";
import Avatar03 from "../../assets/avatar-03.jpg";
import Avatar04 from "../../assets/avatar-04.jpg";
import { users } from "../../users/users";
import "./Card.css";

const Card = ({ event }) => {
  const { author, name, description, created_at, dates } = event;

  const attendeesLength = dates?.[0]?.attendees?.length ?? 0;
  const spaceFiller = (n) => Math.ceil(15 / n);
  const user = users.find((user) => user.name === author);

  return (
    <div className="card">
      <div className="header">
        <div className="user">
          <img src={user?.profilePicture ?? ""} alt="Profile picture" />
          <div className="detail">
            <h4>{user.name}</h4>
            <p>{user.userTag}</p>
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
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="schedule" style={{ "--quantity": dates.length }}>
        <ul>
          {Array(spaceFiller(dates.length))
            .fill(null)
            .map((_, repeatIndex) =>
              dates.map((date, index) => (
                <li key={`${repeatIndex}-${index}`}>
                  <time dateTime={date.date}>
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
              ))
            )}
        </ul>
      </div>
      {/* <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> */}
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
        <Link to={`/api/events/${event.id}`} className="join">
          Join
        </Link>
      </div>
    </div>
  );
};

export default Card;
