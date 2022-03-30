import "./thumbnail.css"

export function Thumbnail(props) {
    return (
        
        <div class="category" onClick={props.onClick}>
            <img src={props.src} alt={props.name} />
            <div class="fade"></div>
            <div class="cat-name">{props.name}</div>
        </div>
        
    )
}