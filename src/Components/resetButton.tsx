import React from "react";

interface IResetButtonProps {
    reset: Function
}

export const ResetButton: React.FC<IResetButtonProps> = (props:IResetButtonProps) => {
    return(
        <button className="Button"
                onClick={() => props.reset()}>
                    Reset
        </button>
    )
}