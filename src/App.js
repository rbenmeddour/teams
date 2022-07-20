import "./App.css";
import teams from "./teams.json";
import TeamInfo from "./components/TeamInfo";
import React from "react";

class App extends React.Component {
  render() {
    console.log(teams);
    return (
      <div>
        <p>Hello</p>
        <div class="container">
          <div class="row">
            <div class="col">
              {teams.map((team) => {
                return (
                  <TeamInfo
                    name={team.name}
                    shortName={team.shortName}
                    venue={team.venue}
                    address={team.address}
                    email={team.email}
                    founded={team.founded}
                    tel={team.phone}
                    picture={team.crestUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
