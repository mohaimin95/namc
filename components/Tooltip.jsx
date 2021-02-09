
function Tooltip({text}) {
    return (
        <div>
            <div className="tooltip">
                {text}
            </div>
            <style jsx>{`
                .tooltip {
                    padding:2px 8px;
                    width:min-content;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border-radius:15px;
                    background-color:black;
                    color:white;
                    font-size:10px;
                }
            `}</style>
        </div>
    );
}

export default Tooltip;