const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    const onDragStart = (event : React.DragEvent<HTMLDivElement> ) => {
        console.log("I'm being dragged")
    }
    return(
        <div className="DragMe">
            {/* <input onChange={onChange}/> */}
            <i className="bi bi-arrow-down-circle-fill"></i>
            <div draggable onDragStart={onDragStart}>Drag Me!</div>
        </div>
    );
};

export default EventComponent;
