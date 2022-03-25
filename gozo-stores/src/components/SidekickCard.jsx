export default function Sidekick(props) {
    return (
        <div className="sidekick-card">
            <a href=""><div class="product-card product-horizontal">

                <div class="product-image-container">
                    <img class="product-image img-res" src={props.src} alt="sidekick product" />
                </div>
            
                <div class="product-card-body text-left">
                    <span class="product-tag"> NEW ARRIVALS !! </span>
                    <div class="product-details">
                        <div class="product-header"> {props.title} </div> <br/>
                        <div class="product-desc text-s">{props.subtitle}</div>
                    </div>
                </div>
            </div></a>
        </div>
    )
}