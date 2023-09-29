import React, { useState } from "react";

const Box = ({ bgColor, width, height }) => {
    return (
        <div>
            <div
                style={{
                    backgroundColor: `${bgColor}`,
                    width: `${width}em`,
                    height: `${height}em`
                }} />
        </div>
    )
}

export default Box;