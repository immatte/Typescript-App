import { useState} from "react";

const users = [
    { name: 'Isabelle', age: 20 },
    { name: 'Vicky', age: 20 },
    { name: 'Maya', age: 20 }
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined >();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        });
        console.log(foundUser);
        setUser(foundUser)
    }

    
    return (
    
    <div className="UserSearch">
        <h3>User Search</h3>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>

    );
};

export default UserSearch;