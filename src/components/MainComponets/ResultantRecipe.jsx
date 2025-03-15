import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const ResultantRecipe = (props) => {
    return (       
        <div className='recipe-box'>
        <Markdown remarkPlugins={[remarkGfm]}>{props.recipe}</Markdown>
        <h2 ref={props.ref}>Thank You For Visiting This Page</h2>
        </div> 
    )
   /*return (

    <div className='recipe-box'>
    <h1>Simple Pancake Recipe</h1>
    <h2>Ingredients:</h2>
    <ul>
        <li>1 cup all-purpose flour</li>
        <li>2 tablespoons sugar</li>
        <li>1 teaspoon baking powder</li>
        <li>1/2 teaspoon salt</li>
        <li>3/4 cup milk</li>
        <li>1 large egg</li>
        <li>2 tablespoons melted butter</li>
        <li>1 teaspoon vanilla extract</li>
    </ul>
    
    <h2 ref={props.ref}>Instructions:</h2>
    <ol>
        <li>In a bowl, mix the flour, sugar, baking powder, and salt.</li>
        <li>In another bowl, whisk together the milk, egg, melted butter, and vanilla extract.</li>
        <li>Pour the wet ingredients into the dry ingredients and mix until combined.</li>
        <li>Heat a non-stick pan over medium heat and lightly grease it.</li>
        <li>Pour 1/4 cup of batter onto the pan for each pancake.</li>
        <li>Cook until bubbles form on the surface, then flip and cook until golden brown.</li>
        <li>Serve warm with syrup or your favorite toppings.</li>
    </ol>
    </div>
   )*/
}

export default ResultantRecipe