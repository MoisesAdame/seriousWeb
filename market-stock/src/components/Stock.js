import { Category } from './Category';
import { setState, useState } from 'react'

export function Stock({list}){
    const [categories, setCategories] = useState(null)
    const [stocked, setStocked] = useState(true)
    
    function separateCategories(list){
        var categories = {}
        for(var element of list){
            if(stocked && !element.stocked){
                continue
            }
            
            if(categories[element.category]){
                categories[element.category].push(element)
            }else{
                categories[element.category] = [element]
            }
        }

        return categories;
    }

    function handleButton(){
        var categoriesObjct = separateCategories(list)
        var cat = Object.keys(categoriesObjct).map((key) => {
            return <Category key={key + categoriesObjct[key]} name={key} products={categoriesObjct[key]}/>
        })

        setCategories(cat)
        setStocked(!stocked)
    }

    return (
        <div className='stock'>
            <div className='stock-header'>
                <h1>Stock</h1>
                <input type='checkbox' onClick={handleButton}></input><tag>Only show products in stock</tag>
                <p>
                    <span className="stock-header-name">Name</span>
                    <span className="stock-header-price">Price</span>
                </p>
            </div>
            <div className='stock-categories'>
                {categories}
            </div>
        </div>
    );
}