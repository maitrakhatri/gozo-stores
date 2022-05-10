export function Toast(props) {
    return (
        <div className="alert bg-yellow text-gray">
            {props.title}
        </div>
    )
}