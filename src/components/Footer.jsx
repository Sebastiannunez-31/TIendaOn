import React from "react";


const Footer =()=>{

    return(
        <div className="container-fluid fondoMarron">
        <div className="container py-5">
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <img src={"/img/logo.png"} className="logo" alt={"tiendaO footer"} width={192} />
                </div>
                <div className="col-md-6 text-end">
                    <p>
                        <a href={""} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/img/SM-RRSS-04.png"} alt="Facebook" width={24} /></a>
                        <a href={""} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/img/SM-RRSS-03.png"} alt="Instagram" width={24} /></a>
                        <a href={""} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/img/SM-RRSS-02.png"} alt="YouTube" width={24} /></a>
                        <a href={""} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/img/SM-RRSS-01.png"} alt="Twitter" width={24} /></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Footer