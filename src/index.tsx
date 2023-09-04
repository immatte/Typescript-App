import ReactDOM from "react-dom";
import GuestList from "./state/Guest.list";
// import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

const App = () => {
return (<div>
    <h1>Hi there!</h1>
    <GuestList/>
    <UserSearch/>
    <EventComponent/>
    
</div>
);

}

ReactDOM.render(<App/>,document.querySelector('#root'));