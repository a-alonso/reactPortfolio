const Card = ({ onSelect, image, alt, title, subtitle }) => {
    return <div className="column is-6">
            <div className="card">
                <a onClick={onSelect}>
                    <div className="card-image">
                        <figure className="image is-350x150">
                            <img src={image} alt={alt} />
                        </figure>
                    </div>
                </a>
                <div className="card-content">
                    <a onClick={onSelect}>
                        <p className="title is-3">{title}</p>
                        <p className="subtitle is-6">{subtitle}</p>
                    </a>
                    <a onClick={onSelect}>
                        <p> 
                            <br/>
                            Read more
                            <span className="icon">
                                <i className="fa fa-long-arrow-right"></i>
                            </span>
                        </p>
                    </a>
                </div>
            </div>
    </div>
}

export default Card