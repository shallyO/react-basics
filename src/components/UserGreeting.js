export const UserGreeting = () => {
    const isLoggedIn = true

    return (
        <div> Welcome {isLoggedIn ? 'Vishaw' : 'Guest'}</div>

        // displays Vishaw if isLoggedIn is true
    )
}