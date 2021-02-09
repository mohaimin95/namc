
function Tags({tags}) {
    let tagList = Object.keys(tags);
    return (
        <div>
            {
                tagList.length > 0 && (<div>
                    <b>tags:</b>&nbsp;{tagList.join(", ")}
                </div>)
            }
        </div>
    );
}

export default Tags;