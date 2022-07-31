import { Link } from "react-router-dom";

function Header() {

    let states = {
        "The concept": "/",
        "Accounts": "/accounts",
        "Conclude": "/conclude",
        "Instantiate": "/instantiate",
        "Sponsor": "/sponsor",
        "Status": "/status",
    };

    return (
        <div className="row-functions">
            {
                Object.keys(states).map((item, value) => {
                    let getLink = states[item];
                    return (
                        <div className="call-button">
                            <Link to={getLink}>
                                {item}
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Header;