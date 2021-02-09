import data from '../static-variables';
function Navbar({ dark = true, background = true }) {
    return (
        <div className={"header" + (dark ? " dark" : "") + (background ? " bg" : "")}>
            <div className="brand">
                <h1 className="header-title">{data.appName}</h1>
                <div className="header-sub-title">{data.subtitle}</div>
            </div>
            <style jsx>{`
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
.header.dark {
    color: black;
}
.header.bg {
    background-color: white;
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
  }
            `}</style>
        </div>
    );
}

export default Navbar;