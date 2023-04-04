export function LogIn({handleClick}){
    return (
        <div className='log-in'>
            <h2>Log In</h2>
            <input type='text' placeholder='User Name...' className='log-in-input' id='username'></input>
            <input type='password' placeholder='Password...' className='log-in-input' id='password'></input>
            <input type='button' placeholder='Password...' className='log-in-button' id='button' onClick={handleClick} value='Log In'></input>
        </div>
    );
}