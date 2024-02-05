import React, {useState} from 'react';
import flechehaut from "@/Assets/Images/Components/Dropdown/DropDownFlecheHaut.png";
import flechebas from "@/Assets/Images/Components/Dropdown/DropDownFlecheBas.png";



const Collapse = ({title, description}) => {

    const [open, setopen] = useState(false);

    const handleCollapse = () => {
        setopen(!open);
    }

    return (
        <li className='Collapse-Container'>
            <div className='Collapse-Header' onClick={handleCollapse}>
                <h2>{title}</h2>
                <span>
                    <img src={open ? flechehaut : flechebas} alt="flechesClick" />
                </span>
            </div>
            {
                open && (
                    <div className='Collapse-description'>
                        {description}
                    </div>
                )
            }
        </li>
    );
};

export default Collapse;