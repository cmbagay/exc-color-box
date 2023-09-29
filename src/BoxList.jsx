import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid"

const BoxList = () => {
    const DEFAULT_STATE = [{ id: uuid(), bgColor: '', width: '', height: '' }]

    const [boxes, setBoxes] = useState(DEFAULT_STATE);
    const addBox = (bgColor, width, height) => {
        setBoxes(boxes => [...boxes, { bgColor, width, height }])
    }

    return (
        <div>
            <h3>Colored Box Maker!</h3>
            <NewBoxForm addBox={addBox} />

            <div> {boxes.map((id, bgColor, width, height) =>
                <Box id={id} bgColor={bgColor} width={width} height={height} />)} </div>
        </div>
    )
}

export default BoxList;