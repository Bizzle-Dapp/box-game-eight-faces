import React, { useEffect, useState } from "react";

interface IMouseOverBoxProps {
    imagePath: string,
    freezeCounter: boolean
    setFreezeCounter: Function
}

export const MouseOverBox: React.FC<IMouseOverBoxProps> = (props: IMouseOverBoxProps) => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        if(counter >= 10){
            props.setFreezeCounter(true);
        }
    }, [counter]);

    return(
        <div className="Mouse-Over-Box" 
            onMouseEnter={() => { 
                if(!props.freezeCounter){
                    setCounter(counter + 1)
                }
            }}>
            <img className="Mouse-Over-Image" 
                src={props.imagePath}
                alt={`One of the images is here. Currently highlighted ${counter} times.`} />
            <p className="Mouse-Over-Box-Text">{counter} points</p>

        </div>
    )
}
