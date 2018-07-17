export const Article = (props) => {
    const { article } = props;
    const title = article.title,
       description = article.description,
       image = article.image_url,
       authors = article.authors,
       link = article.url;

    return (
        <li className='article'>
            <h1><a href={link}>{title}</a></h1>
            <img src={image}></img>
            <p>{description}</p>
            <p>{authors}</p>
        </li>
    )
}