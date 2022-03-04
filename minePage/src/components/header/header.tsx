import './header.less'
import { Link,Navigate } from 'react-router-dom'
const  Header = ()=>{

    return (
        <header id={"header"}  className="fixed-top ">

            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light header  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">liuhao</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item nav-menu">
                                <a href={'https://www.liuhao.website/'} className="nav-link active" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item nav-menu">
                                <a className="nav-link" href="https://www.liuhao.website/resumd/" target={'_blank'}>Resume</a>
                            </li>
                            <li className="nav-item nav-menu">
                                <a className="nav-link " href="https://www.liuhao.website/blog/"  target={'_blank'}>Blog</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header