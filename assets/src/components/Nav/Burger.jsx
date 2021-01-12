import React, { useState } from 'react';

const Burger = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="mainnav__hamburger" onClick={() => setOpen(!open)}>
            <i className="fas fa-bars mainnav__icon "></i>
            {open && props.children}


        </div>

    )
};



export default Burger;