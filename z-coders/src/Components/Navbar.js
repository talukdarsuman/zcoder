
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(19, 31, 121, 0.4)', color: 'white' }}>
            <div className="container-fluid">
                <div className="navbar-brand" style={{ color: 'white' }}>{props.title}</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="home" style={{ color: 'white' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:zcoder@gmail.com" style={{ color: 'white' }}>Contact Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">My Problems</a></li>
                                <li><a className="dropdown-item" href="/">Unsolved Problems</a></li>
                                <li><a className="dropdown-item" href="/">Solved Problems</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>Logout</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string }
Navbar.defaultProps = {
    title: "Zcoder"
}
