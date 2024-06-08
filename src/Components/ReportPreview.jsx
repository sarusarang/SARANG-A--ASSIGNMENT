import React from 'react'
import './ReportPrev.css'
import { previewClose } from '../STORE/PreviewSlice'
import { useSelector, useDispatch } from 'react-redux'






function ReportPreview() {


    const { PrevStatus,ReportName } = useSelector((state) => state.preview)


    const Dsipatch = useDispatch()

    return (



        <>

            {/* REPORT PREV */}
            <section className='prev'>


                <div className='d-flex  justify-content-between w-100 report-head'>

                    <h6>Report Preview {ReportName}</h6>


                    <button className='prev-close-btn' onClick={()=>{Dsipatch(previewClose())}}><i class="fa-solid fa-x"></i></button>


                </div>


                <div className='img-overflow'>

                    <img src="/REPORT.png" className='img-fluid' alt="report" />

                </div>

                <div className='btns'>

                    <a href="/REPORT.png" download className='download-btn'><i class="fa-solid fa-file-arrow-down"></i> Download</a>

                    <button className='close-btn' onClick={()=>{Dsipatch(previewClose())}}><i class="fa-solid fa-file-arrow-down"></i> Close</button>


                </div>



            </section>


        </>




    )





}

export default ReportPreview