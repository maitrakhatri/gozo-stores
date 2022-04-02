export function Sidekick(props) {
    return (
        <div className="sidekick-card">
            <div className="product-card product-horizontal">

                <div className="product-image-container">
                    <img className="product-image img-res" src={props.src} alt="sidekick product" />
                </div>
            
                <div className="product-card-body text-left">
                    <span className="product-tag"> NEW ARRIVALS !! </span>
                    <div className="product-details">
                        <div className="product-header"> {props.title} </div> <br/>
                        <div className="product-desc text-s">{props.subtitle}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}