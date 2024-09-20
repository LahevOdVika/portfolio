export default function Card({imageUrl, imageAlt, header, text}) {
    return <>
        <div className="card">
            <img src={imageUrl} alt={imageAlt}/>
            <br/>
            <a href="#" className="a-link">
                {header}
            </a>
            <p>{text}</p>
        </div>
    </>
}