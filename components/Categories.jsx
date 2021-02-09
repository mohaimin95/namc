import Tooltip from "./Tooltip";

function Categories({categories}) {
    const getKeys = () => Object.keys(categories);
    return (
        <div className="categories">
            
            {getKeys().map((category,i)=><div key={i} className="category"><Tooltip text={category}/></div>)}
            <style jsx>{`
            .categories {
                margin:4px 0;
                display:flex;
            }
            
            .category {
                margin-right:4px;
            }

            `}</style>
        </div>
    );
}

export default Categories;