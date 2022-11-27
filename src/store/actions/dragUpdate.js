const DRAG_UPDATE = 'DRAG_UPDATE';


const dragUpdate = (payload) => {
    return {
        type:DRAG_UPDATE,
        payload
    }
}
export {DRAG_UPDATE, dragUpdate}