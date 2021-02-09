import '../styles/homepage.module.css';
var img = ("/static/images/mohaimin.jpg")
import data from '../static-variables';
import Image from 'next/image'
import Link from 'next/link';
function Home(props) {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="brand">
          <h1 className="header-title">{data.appName}</h1>
          <div className="header-sub-title">{data.subtitle}</div>
        </div>
      </div>
      <div className="content">
        <div className="intro">
          <div className="intro-header">
            <h1>
              <span>Hi I'm</span>&nbsp;Abdul Mohaimin
                    </h1>
          </div>
          <div className="intro-content">
            <span>
              {data.homepageText}
            </span>
          </div>
          <div className="intro-footer">
            <div className="intro-social">
              {
                data.socialLinks.map((social, index) => (
                  <div key={index} className="social-item">
                    <a href={social.link} target="_blank">{social.text}</a>
                  </div>
                ))
              }
            </div>
            <Link href="/about">
              <button type="button" id="learn_more" className="button">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="picture">
          <div className="picture-img">
            <img src={img} height="100%" width="100%" alt="Abdul Mohaimin" style={{}} className="picture-img-tag" />
            <p>Its me 👆</p>
          </div>
        </div>
        <div className="footer">
          Made with ❤️ by #nam_c
            </div>
      </div>
      <style jsx>{`
            
.wrapper {
  background: #396afc;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 100vh;
}
.header {
  width: 100%;
  position: fixed;
  height: var(--header-height);
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  padding-left: var(--padding-left);
  justify-content: flex-start;
}
.header-title {
  font-weight: bold;
  font-size: 1.5rem;
}
.header-sub-title {
  font-size: .8rem;
}

.brand {
  display: flex;
  flex-direction: column;
}
.content {
  color: white;
  height: 70%;
  padding-top: var(--header-height);
  padding-left: var(--padding-left);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.intro {
  width: 50rem;
}

.intro-header > h1 {
  font-size: 1.8rem;
}
.intro-header > h1 >span {
  font-weight: lighter;
}
.intro-header > h1 >span {
  font-weight: lighter;
}
.intro-content {
  text-align: justify;
}
.intro-footer {
  margin-top: 1rem;
}
.button {
  font-weight: bold;
  cursor: pointer;
  height: 3rem;
  width: 10rem;
  background-color: white;
  border: 0;
  color: #3562fc;
  border-radius: 2rem;
}
.button:hover {
  border:0;
  background-color: #eee;
}
.button:focus {
 outline: 0;
}
.intro-social {
  display: flex;
  margin-bottom: 1rem;
}
.social-item a {
  color: white;
  text-decoration: none;
}
.social-item > a::after  {
  content: " | ";
}
.social-item:last-child > a::after {
  content: "";
}
.picture {
  display: flex;
  text-align: center;
  width: 32vh;
  height: 32vh;
}
.picture-img-tag {
  width: 100% !important;
  height: 100% !important;
  border-radius: 50% !important;
}
.footer {
  position: absolute;
  bottom: 0;
  padding-bottom: 1rem;
}
@media only screen and (max-width: 768px) {
  * {
      font-size: .99rem;
  }
  /* For mobile phones: */
  .header {
      justify-content: center;
      padding: 0;
  }
  .header-sub-title {
      display: none;
  }
  .brand {
      display: flex;
      justify-content: center;
      align-items: center;        
  }
  .content {
      padding:2rem 1rem;
  }
  .intro {
      width: 100%;
      text-align: justify;
  }
  .picture {
      display: none;
  }
}
            `}</style>
    </div>
  );
}

export default Home;