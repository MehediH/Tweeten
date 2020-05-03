export default function FeatureCard({ icon, title, text }){
    return (
        <li className="mini">
            <div className="icon">
                <img src={`./icons/${icon}.svg`} alt={`${icon} icon`}/>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </li>
    )
}