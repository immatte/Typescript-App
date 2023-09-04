import ReactDOM from "react-dom";
import GuestList from "./state/Guest.list";
// import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";
import './index.css';

const App = () => {
return (
<div className="App">
    <h1>Hi there!</h1>
    <div className="SearchPannel">
        <GuestList/>
        <div>
            <EventComponent/> 
        </div>
        <UserSearch/>
    </div>
</div>
);

}

ReactDOM.render(<App/>,document.querySelector('#root'));