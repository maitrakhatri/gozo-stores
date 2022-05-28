export function Toast(props) {
    return (
        <div className="alert bg-green text-white">
            {props.title}
        </div>
    )
}