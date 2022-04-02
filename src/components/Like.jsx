export function Like(props) {

    return(
        <div onClick={props.onClick}>
            {props.active? <span className="like-product bg-gray"><img src="../../assets/icons/heart-filled.png" alt="like" /></span> : <span className="like-product bg-gray"><img src="../../assets/icons/heart-outline.png" alt="like" /></span>}
        </div>
    )
}