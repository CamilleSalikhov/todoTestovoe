const DRAG_INSIDE = 'DRAG_INSIDE';



const dragInside = (payload) => {
    return {
        type:DRAG_INSIDE,
        payload
    }
}

export {DRAG_INSIDE, dragInside}