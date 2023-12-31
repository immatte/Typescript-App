import { useState, useRef, useEffect} from "react";

const users = [
    { name: 'Isabelle', age: 20 },
    { name: 'Vicky', age: 21 },
    { name: 'Maya', age: 19 }
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined >();

    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    }, []);

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
        <input 
            ref={inputRef} 
            value={name} 
            onChange={e => setName(e.target.value)}/>
        <div>
            <button onClick={onClick}>Find User</button>
        </div>
        <div>
            <div>
                {user && user.name}
            </div>
            <div>
                {user && user.age} 
            </div>
        </div>
    </div>

    );
};

export default UserSearch;