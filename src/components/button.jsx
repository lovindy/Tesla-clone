import React from "react";

function ButtonTesla({ children, className }) {
    const baseStyle = "bg-black text-sm py-3 md:px-24 px-8 rounded transition duration-500 ease-in-out";
    const combinedStyle = `${baseStyle} ${className}`;

    return (
        <button className={combinedStyle}>
            {children}
        </button>
    );
}

export default ButtonTesla;
