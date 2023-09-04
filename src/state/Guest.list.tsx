import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests,name]);
    }
    console.log(guests)

    return (
        <div className="GuestList">
            <h3>Guest list</h3>
            <ul>
                {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ul>
            <input value={name} onChange={ (e) => setName(e.target.value)}/>
            <div>
                <button onClick={onClick}>Add Guest</button>
            </div>
        </div>
        );
};

export default GuestList;