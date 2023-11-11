
import Category from '../Category/Category';

const Categories = ({displayCategories}) => {
    
    return (
        <div className='my-12'>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {
                    displayCategories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;