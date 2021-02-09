import data from '../static-variables';
import TechStack from '../components/TechStack';
function about(props) {
    return (
        <div className="lm_wrapper">
            <div className="lm_header">
                <div className="lm_brand">
                    <h1 className="lm_header-title">#nam_c</h1>
                    <div className="lm_header-sub-title">Software Engineer | MEAN | MERN | React Native</div>
                </div>
            </div>
            <div className="lm_content">
                <div className="lm_banner">
                    <div className="lm_banner-content">
                        <h2>Artisan</h2>
                        <h4>UK  /ˈɑː.tɪ.zæn/ US  /ˈɑːr.t̬ə.zən/</h4>
                        <p><b>Meaning:</b> someone who does skilled work with their hands.</p>
                    </div>
                </div>
            </div>
            <div className="lm_learn-more-content">
                <div className="lm_about-me">
                    <h2 className="lm_title align-left">About Me</h2>
                    <p className="text-justify">{data.aboutMe}</p>
                </div>
                
                <h2 className="lm_title">Technical Stack</h2>
                <div className="lm_skills">
                    {
                        data.skills.map((skill, i) => <TechStack key={i} img={skill.img} name={skill.name} />)
                    }


                </div>
            </div>
            <style jsx>{`
            
* {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}
.lm_wrapper {
    width: 100%;
    height: 100vh;
}
.lm_header {
    width: 100%;
    position: fixed;
    height: var(--header-height);
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    padding-left: var(--padding-left);
    justify-content: flex-start;
}
.lm_header-title {
    font-weight: bold;
    font-size: 1.5rem;
}
.lm_header-sub-title {
    font-size: .8rem;
}

.lm_brand {
    display: flex;
    flex-direction: column;
}
.lm_content {
    color: black;
    height: 60%;
    padding-top: var(--header-height);
    padding-left: var(--padding-left);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.lm_banner-content {
    text-align: center;
}
.lm_skills {
    /* padding: 0 1rem; */
    display: grid;
    justify-content:center;
    align-items:center;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
}

.lm_title {
    text-align: center;
    padding: 2rem;
    /* padding-left: 1rem; */
} 
.lm_align-left {
    text-align: left;
    padding: 0;
}
.lm_learn-more-content {
    padding: 0 2rem;
}
@media only screen and (max-width: 768px) {
    * {
        font-size: .99rem;
    }
    /* For mobile phones: */
    .lm_header {
        justify-content: center;
        padding: 0;
    }
    .lm_header-sub-title {
        display: none;
    }
    .lm_brand {
        display: flex;
        justify-content: center;
        align-items: center;        
    }
    .lm_content {
        padding:2rem 1rem;
    }
    .lm_intro {
        width: 100%;
        text-align: justify;
    }
    .lm_picture {
        display: none;
    }
    .lm_skill {
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20vh;
        height: 20vh;
        margin: .5rem;
    }
    .lm_learn-more-content {
        padding: 0 .5rem;
    }
  }
            `}</style>
        </div>
    );
}

export default about;