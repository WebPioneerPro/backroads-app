
const Title = ({title, highlight}) => {
    return (
        <div className="section-title">
            <h2>{title} <span>{highlight}</span></h2>
        </div>
    )
}

export default Title
