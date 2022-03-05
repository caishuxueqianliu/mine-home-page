import {useEffect, useState} from 'react'
import {getProjectInfo} from "../../services/project";
import { useParams } from 'react-router-dom'
type IImgList = Array<number> | never[]

const Project = (props:any) => {
    let { id } = useParams()
    const [info,setInfo] = useState({})
    const [imgList,setImgList] = useState([])
    const [productabbr,setProductabbr] = useState('')
    useEffect(()=>{
        getProjectInfo({id}).then(res=>{
            // let arr:IImgList
            let arr:IImgList = []
            for (let i = 1;i<= res.data.imgLength;i++){
                arr.push(i)
            }
            setInfo( res.data)
            setImgList(arr)
            setProductabbr(res.data.abbr)
        })
    },[])
    const codeUrl = (url:string) =>{
        window.open(url)
    }
    return (
        <main id={'main'}>
            <div className="container py-4">
                <div className="section-title">
                    <h2>project show</h2>
                    <p>项目详情</p>
                </div>

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">{info.title}</h1>
                        <p className="col-md-8 fs-4">{info.detailInfo}</p>
                        <button onClick={()=>codeUrl(info.codeUrl)} className="btn btn-primary btn-lg" disabled={info.openSource  == 0 ?  true : false} type="button">源码</button>
                    </div>
                </div>


                <div className="container marketing">


                   { imgList.map((item:any,index)=>{
                       return ( <div key={index} >
                               <hr className="featurette-divider"/>
                               <div className="row featurette" style={{backgroundColor:'#f8f9fa'}}>
                                   <div className={`col-md-4 ${ index%2? 'order-md-2' : ''} ` }>
                                       <h2 className="featurette-heading">项目截图 </h2>
                                       {/*<p className="lead">项目截图 </p>*/}
                                   </div>
                                   <div className="col-md-8 order-md-1">
                                       <img style={{height:500}} className={'bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'} src={`/images/project/${productabbr}/${item}.png`} alt=""/>
                                   </div>
                               </div>

                           </div>
                       )
                   })}


                </div>
                </div>
        </main>
    )
}

export default Project
