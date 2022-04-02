import "./thumbnail.css"

export function Thumbnail(props) {
    return (
        
        <div className="category" onClick={props.onClick}>
            <img src={props.src} alt={props.name} />
            <div className="fade"></div>
            <div className="cat-name">{props.name}</div>
        </div>
        
    )
}