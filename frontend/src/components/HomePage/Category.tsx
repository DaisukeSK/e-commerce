import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productsType, categoriesType, AppContext } from '../../App.tsx'

function Category(props:{category:categoriesType}) {

    const { products } = useContext(AppContext)

    return (
        <div className='categorizedProduct'>

            <h2>{props.category.category_name}</h2>

            <div className='flex'>

                {products.map((product:productsType, key:number)=>{
                    return props.category.category_id==product.category_id && (
                        <Link to={`/product/${product.product_id}`} className='imgA' key={key}>
                            <h3>{product.title}</h3>
                            <img src={product.images[0]}/>
                        </Link>
                    )
                })}

                <Link to={`/category/${props.category.category_id}`} className='seeMore'>
                    <svg width='10' height='16'>
                        <path d='m0 0 v16 l10 -8'/>
                    </svg>
                    <span>See More</span>
                </Link>

            </div>

        </div>
    )
}

export default Category