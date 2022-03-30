export function Like(props) {

    return(
        <div onClick={props.onClick}>
            {props.active? <span class="like-product bg-gray"><img src="../../assets/icons/heart-filled.png" alt="like" /></span> : <span class="like-product bg-gray"><img src="../../assets/icons/heart-outline.png" alt="like" /></span>}
        </div>
    )
}