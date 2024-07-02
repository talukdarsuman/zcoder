



export default function Welcome() {
    return (
        <>
            <div className="WelNav" style={{color: 'white' ,display:'flex',justifyContent:'center',backgroundColor: 'rgba(19, 31, 121, 0.4)', width:'100%'}}>
                <nav className="navbar navbar-expand-lg" style={{ }}>
                    <div className="container-fluid">
                        <div className="navbar-brand" style={{ color: 'white',fontSize:'1.5rem' }}>Zcoder</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:zcoder@gmail.com" style={{ color: 'white' }}>Contact Us</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            
            </div>
            <section className="first_section1">
                <div className="left_section1">
                    <div className="wel">Welcome to ZCoder</div>
                    <div className="wel1">Improve Your Skills</div>
                </div>
                <div className="right_section1">
                    <ul>
                        <li><a href="demo">Request Demo</a></li>
                        <li><a href="li2">Solved Problems</a></li>
                        <li><a href="li3">Unsolved Problems</a></li>
                    </ul>
                </div>
            </section>
            <hr />
            <section className="second_section1">
                <div className="line_1">
                    <p className="line_01">Develop the strongest tech teams around</p>
                    <p>Sharpen your tech skills and pursue job opportunities</p>
                </div>
            </section>
            <section className="third_section">
                <div className="line_2">
                    <button className="Login"><a href="login">Login</a></button>
                    <button className="Request_demo"><a href="demo">Request Demo</a></button>
                </div>
            </section>
            <section className="fourth_section">
                <div className="line_3">
                    <p className="li_1">Code is like humor.</p>
                    <p>When you have to explain it, it’s bad!!</p>
                </div>
            </section>
        </>
    )
}
