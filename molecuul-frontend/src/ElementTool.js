import React, {useEffect, useState} from 'react';
import ConfigurationMenu from "./ConfigurationMenu";

/* square element on sidebar */
function ElementTool (props) {
    const octInfo = props.info;
    const [isOpen, setOpen] = useState(false);
    // const index = props.index;
    const image = props.info.tile;

    const handleClick = event => {
        setOpen(current => !current);
    }

    useEffect(() => {
        // props.handleChange(props.ind);
        console.log(isOpen)
    });

    return (
        <div className='ElementTool'>
            <img id='elem-square' src={require(`./images/${image}.svg`)} alt='element tile' onClick={handleClick} />
            {isOpen && <ConfigurationMenu info={octInfo}/>}
        </div>
    )
}

export default ElementTool;

