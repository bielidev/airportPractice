export const Navigation = () => {
  return (
    <section id="navbar">
        <nav role="navigation">
            <ul>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/map">
                    Map
                </NavLink>
                <NavLink to="/flights">
                    Flights 
                </NavLink>
            </ul>
        </nav>
    </section>
  )
}

