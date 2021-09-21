import  style from "./Recipe.module.css"

const Recipe = ({title, calories, image,cuisine,recipeurl}) => {
    return ( 
        <div className={style.recipe}>
            <img src={image} alt=""/>
            <h1>{title}</h1>
            <h3>{cuisine}</h3>
            <p>{calories}</p>
            <a href={recipeurl} target="_blank" rel="noreferrer"> Full Recipe</a>
        </div>
     );
}
 
export default Recipe;