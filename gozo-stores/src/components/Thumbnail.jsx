import "./thumbnail.css"

export default function Thumbnail(props) {
    return (
        <a href="">
            <div class="category">
                <img src={props.src} alt={props.name} />
                <div class="fade"></div>
                <div class="cat-name">{props.name}</div>
            </div>
        </a>
    )
}