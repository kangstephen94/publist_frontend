export const Article = (props) => {
    const { article } = props;
    let title = article.title,
       description = article.description,
       image = article.image_url,
       link = article.url,
       author = article.authors;

       {if (author) {
        author = <p>By: {author.filter(word => word.length < 25).join(',  ')}</p>
       } else {
           author = <p></p>
       }
    }

    return (
        <li className='article'>
            <div className='title'>
            <h1><a target="_blank" href={link}>{title}</a></h1>
            {author}
            </div>
            <a target="_blank" href={link}><img src={image}></img></a>
            <p>{description}</p>
        </li>
    )
}