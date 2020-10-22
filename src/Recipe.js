import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title,calories,image,ingredients,servings}) => {
    return(
        <div className={style.receitas}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>Amount of Calories {calories.toFixed(2)}</p>
            <p>Servings {servings}</p>
            <img className={style.image}src={image} alt=""></img>
        </div>
    );
;}

export default Recipe;