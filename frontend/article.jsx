export const Article = (props) => {
    const { article } = props;
    const title = article.title,
       description = article.description,
       image = article.image_url,
       link = article.url;


    return (
        <li className='article'>
            <div className='title'>
            <h1><a href={link}>{title}</a></h1>
            </div>
            <a href={link}><img src={image}></img></a>
            <p>{description}</p>
        </li>
    )
}