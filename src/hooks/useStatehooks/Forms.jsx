import { useState } from 'react';

const Forms = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <form>
            <input type="text" value={name.firstName}
                placeholder='Firstname' onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" value={name.lastName}
                placeholder='Lastname' onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>Your Firstname is - {name.firstName}</h2>
            <h2>Your Lastname is - {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    );
};

export default Forms;