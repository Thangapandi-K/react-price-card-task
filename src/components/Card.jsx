import React from 'react'

const Card = (data) => {

      // funtion to store data in individual card

  return (

    <div className="card col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
        {/* card header datas */}
        <div className="card-header">
            <h5 className="fw-bold text-center">{data.data.plan}</h5>
            <h1 className="text-center">${data.data.price}<span className="period">/month</span></h1>
        </div>
        {/* card body datas with condtional rendering and conditional styling using condtional operators*/}
        <div className='card-body'>
            <ul className="fa-ul">
                <li className="fw-medium semibold"><span className="fa-li"><i className="fas fa-check"></i></span>{data.data.user}</li>
                <li className="fw-medium semibold"><span className="fa-li"><i className="fas fa-check"></i></span>{data.data.storage}</li>
                <li className="fw-medium semibold"><span className="fa-li"><i className="fas fa-check"></i></span>{data.data.pubprjt}</li>
                <li className="fw-medium semibold"><span className="fa-li"><i className="fas fa-check"></i></span>{data.data.community}</li>
                <li className={data.data.price == 0 ? "text-muted fw-normal" : "fw-medium semibold"}><span className="fa-li"><i className={data.data.price == 0 ? "fas fa-times" : "fas fa-check"}></i></span>{data.data.pvtPrjt}</li>
                <li className={data.data.price == 0 ? "text-muted fw-normal" : "fw-medium semibold"}><span className="fa-li"><i className={data.data.price == 0 ? "fas fa-times" : "fas fa-check"}></i></span>{data.data.phone}</li>
                <li className={data.data.price == 0 ? "text-muted fw-normal" : "fw-medium semibold"}><span className="fa-li"><i className={data.data.price == 0 ? "fas fa-times" : "fas fa-check"}></i></span>{data.data.subDomain}</li>
                <li className={data.data.price == 0 || data.data.price == 9 ? "text-muted fw-normal" : "fw-medium semibold"}><span className="fa-li"><i className={data.data.price == 0 || data.data.price == 9 ? "fas fa-times" : "fas fa-check"}></i></span>{data.data.report}</li>
            </ul>
            {/* card button  with condtional styling using condtional operators */}
            <div class="d-grid gap-2">
              <button class={data.data.price == 0 || data.data.price == 9 ? "btn btn-primary rounded-pill opacity-75" : "btn btn-primary rounded-pill opacity-95"} type="button">Button</button>
            </div>
        </div>
    </div>
  )
}

export default Card