export const Article = (props) => {
    const { article } = props;
    const title = article.title,
       description = article.description,
       image = article.image_url,
       link = article.url;


    return (
        <li className='article'>
            <div className='title'>
            <h1><a target="_blank" href={link}>{title}</a></h1>
            </div>
            <a target="_blank" href={link}><img src={image}></img></a>
            <p>{description}</p>
        </li>
    )
}