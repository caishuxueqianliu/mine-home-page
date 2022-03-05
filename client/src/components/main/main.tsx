import {useEffect, useState} from 'react'
import {getProjectList} from '../../services/project'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Project from "../project/project";
const Main  = () => {
const [list,setList] = useState([])
    useEffect(()=>{
      getProjectList().then(res=>{
          setList(res.data)
      })
    },[])
    return (
        <main id="main" style={{marginTop:'20px'}}>
            <section id="services" className="services">
                <div className="container " data-aos="fade-up">
                    <div className="section-title">
                        <h2>project show</h2>
                        <p>项目展示</p>
                    </div>
                    <div className="row">
                    {list.map((item:any,index)=>{
                        return(
                                <Link style={{textDecoration: "none"}} to={`/project/${item.id}` } key={item.id} className="col-lg-4 col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box">
                                        <div >
                                            <img src={`/images/${item.icon}`} className="icon"/>
                                        </div>
                                        <h4><a style={{textDecoration: "none"}} href="#">{item.title}</a></h4>
                                        <h6  style={{color:'black'}}>{item.desc}<br/></h6>
                                    </div>
                                </Link>


                        )
                        })}
                    </div>

                </div>
            </section>
        </main>
    )

}

export default Main
