const html = ("/static/images/html.png");
const css = ("/static/images/css.png");
const js = ("/static/images/js.png");
const angular = ("/static/images/angular.png");
const react = ("/static/images/react.png");
const laravel = ("/static/images/laravel.png");
const nodejs = ("/static/images/nodejs.png");
const mongodb = ("/static/images/mongodb.png");
const sql = ("/static/images/sql.png");
const blogPublic = "https://public-api.wordpress.com/rest/v1/sites/namccreativelights.wordpress.com/posts"
export default {
    appName: "#nam_c",
    img:"/static/images/mohaimin.jpg",
    blog:blogPublic,
    blogPost:(postId) => `${blogPublic}/${postId}`,
    subtitle: "Software Engineer | MEAN | MERN | React Native",
    homepageText: `A software developer from India who loves coding, spend most
    of my time on computers. Took programming as my career having
    3+ years of experience in software industry and I love to see
    people growing. Let's join with me for the discussion of
    programming and stuffs.`,
    socialLinks: [
        {
            text: "Facebook",
            link: "https://www.facebook.com/mohaimin95"
        },

        {
            text: "Instagram",
            link: "https://www.instagram.com/mohaimin95"
        },
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/mohaimin95/"
        },
        {
            text: "Twitter",
            link: "https://www.twitter.com/namohaimin"
        },

    ],
    skills: [
        {
            name: "HTML",
            img: html
        },

        {
            name: "CSS",
            img: css,
        },
        {
            name: "Javascript",
            img: js,
        },
        {
            name: "Angular",
            img: angular,
        },
        {
            name: "React/React Native",
            img: react,
        },
        {
            name: "Laravel",
            img: laravel,
        },
        {
            name: "NodeJS",
            img: nodejs,
        },
        {
            name: "MongoDB",
            img: mongodb,
        },
        {
            name: "SQL/MySQL",
            img: sql,
        },


    ],
    aboutMe:`I am Abdul Mohaimin, a software developer having 3+ years of experience in the IT industry. I am a B.Tech Graduate specialized in Information Technology, completed in the year of 2017 at Anna University, Chennai. A love for programming leads to take my career as a PHP Developer in an organization. I learned the most popular frameworks and experimented a lot of things. Then my first project went live and I got more appreciation from the team members and management. After some months I joined a new company. Here I am a brand new javascript developer. Explored more about javascript frontend and backend technologies and helped my team members to grow along with me which results in "Best Overall Performer" recognition. I am not a complete programmer, still I have more to learn and practice. I want to teach the things which I learned to people. Let's connect and discuss more about programming and stuffs.`

}