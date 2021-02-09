
function TechStack({ img, name }) {
    return (
        <div className="lm_skill">
            <div className="lm_skill-img">
                <img src={img} alt={name} />
            </div>

            <div className="lm_skill-text">
                {name}
            </div>
            <style jsx>{`
            .lm_skill {
                justify-content: space-between;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 150px;
                margin: .5rem;
            }
            .lm_skill-img {
                justify-content: center;
                display: flex;
                align-items: center;
                height: 90%;
                width: 90%;
            }
            .lm_skill-img > img {
                justify-content: center;
                display: flex;
                align-items: center;
                height: 90%;
                width: 90%;
            }
            
            .lm_skill-text {
                font-weight: bold;
                font-size: 1rem;
            }
            @media only screen and (max-width: 768px) {
                .lm_skill {
                    width: 100px;
                    height: 100px;
                    margin: .5rem;
                }
            }
            `}</style>
        </div>
    );
}

export default TechStack;