export const Article = (props) => {
    const { article } = props;
    const title = article.title,
       description = article.description,
       image = article.image_url,
       authors = article.authors;

    return (
        <li className='article'>
            <h1>{title}</h1>
            <img src={image}></img>
            <p>{description}</p>
        </li>
    )
}