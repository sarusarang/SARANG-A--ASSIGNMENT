import React from 'react'
import { useState, useEffect } from 'react'
import './Reports.css'
import { GetOrder, getfilter } from '../SERVICES/AllApi'








function Reports() {


    // IF THERE IS SERVER DO THIS FOR GETTING ORDER LIST

    // const [Data,setData] = useState([])

    // useEffect(()=>{


    //     const getorder = async()=>{

    //         try{

    //             const user_id =""
    //             const page_number = ""

    //             const result = await GetOrder ({user_id,page_number})


    //             if(result.status == 200){

    //                 setData(result.data)

    //             }
    //             else{

    //                 console.log(result.status);

    //             }


    //         }
    //         catch(err){

    //             console.log(err);
    //         }

    //     }

    //     getorder()

    // },[])



    // DUMMY DATA FOR ORDER DEATILS
    const data = [

        { orderNo: "A19023", date: '2024-06-01', patientName: 'John Doe', hospitalId: 'DH2023/0001245', testName: 'Blood Test', doctorName: 'Dr.Smith', eta: "2024-06-10", status: 'Ready', age: 22, gender: 'Male', billno: "DH223/0003424" },
        { orderNo: "A19024", date: '2024-06-02', patientName: 'SARANG A', hospitalId: 'DH2023/0001246', testName: 'X-Ray', doctorName: 'Dr.Arun Thambi', eta: "2024-06-15", status: 'Lab Dropped', age: 33, gender: 'Male', billno: "DH223/0003425" },
        { orderNo: "A19025", date: '2024-06-03', patientName: 'Jane Smith', hospitalId: 'DH2023/0001247', testName: 'MRI', doctorName: 'Dr.Jose', eta: "2024-06-20", status: 'Partial Report', age: 54, gender: 'Male', billno: "DH223/0003426" },
        { orderNo: "A19026", date: '2024-06-04', patientName: 'VISHNU', hospitalId: 'DH2023/0001248', testName: 'ECG', doctorName: 'Dr.Vignesh', eta: "2024-06-25", status: 'Lab Dropped', age: 42, gender: 'Male', billno: "DH223/0003427" },
        { orderNo: "A19027", date: '2024-06-05', patientName: 'ROHITH', hospitalId: 'DH2023/0001249', testName: 'CT Scan', doctorName: 'Dr.Sharon', eta: "2024-06-27", status: 'Partial Report', age: 35, gender: 'Male', billno: "DH223/0003428" },
        { orderNo: "A19028", date: '2024-06-06', patientName: 'Jane', hospitalId: 'DH2023/0001250', testName: 'EEG', doctorName: 'Dr.Raj', eta: "2024-06-30", status: 'Ready', age: 26, gender: 'Male', billno: "DH223/0003429" },

    ]



    // TO CHECK THE FILTER STATE
    const [FilterStatus, setFilterStatus] = useState(false)


    // FOR FILTER DATA STATUS 
    const [DataStatus, setDataStatus] = useState(false)

    // TO STORE FORM DATA OF FILTER 
    const [formData, setFormData] = useState({

        fromDate: "", ToDate: "", Referby: '', patientName: '', hospitalId: "", status: "", billno: ""


    })




    // TO STORE FILTERED DATA
    const [filterData, setFilterData] = useState([])


    // TO Get Search vaule
    const [searchStatus, setSearchStatus] = useState(false)

    // To Store Serach Data
    const [Searchvalue, setSearchValue] = useState([])

    const [searchdata, setsearchdata] = useState("")



    // PAGINATION 
    const [currentPage, setCurrentPage] = useState(1);

    const [hoveredRow, setHoveredRow] = useState(null);

    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);




    const [pages, setpages] = useState([])

    // HANDLE HOVER
    const handleMouseEnter = (index) => {
        setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };


    // TO MAKE SEARCH STATUS FALSE 
    useEffect(() => {


        if (!searchdata) {

            setSearchStatus(false)

        }

    }, [searchdata])



    // HANDLE FILTER SUBMIT
    const handleSubmit = async (e) => {


        e.preventDefault()

        // IF THERE IS A SERVER THEN DO THIS FOR FILTER 
        // try {

        //     const res = await getfilter(formData)

        //     if (res.status == 200) {


        //         setFilterData(res.data)
        //         setDataStatus(true)

        //     } else {

        //         setFilterData("")
        //         setDataStatus(false)

        //     }


        // }
        // catch (err) {

        //     console.log(err);
        // }


        const filterd = data.filter(item =>

            (!formData.fromDate || item.date >= formData.fromDate) &&
            (!formData.ToDate || item.eta <= formData.ToDate) &&
            (!formData.Referby || item.doctorName.includes(formData.Referby)) &&
            (!formData.patientName || item.patientName.includes(formData.patientName)) &&
            (!formData.hospitalId || item.hospitalId === formData.hospitalId) &&
            (!formData.status || item.status === formData.status) &&
            (!formData.billno || item.billno === formData.billno)


        )

        if (filterd.length > 0) {

            setpages(filterd.slice(indexOfFirstItem, indexOfLastItem))

        }

        setDataStatus(true)
        setFilterData(filterd)



    }



    // TO CLEAR FILTER
    const clearbtn = () => {


        setFilterData("")
        setFormData("")
        setDataStatus(false)
        setFilterStatus(false)
        setSearchStatus(false)

    }


    // Handle Search
    const handleSearch = async (e) => {


        const SearchTerm = e.target.value.toLowerCase()

        setsearchdata(e.target.value)

        const res = data.filter(item => {

            return Object.values(item).some(value =>

                value.toString().toLowerCase().includes(SearchTerm)
            );


        })

        if (res) {


            setSearchValue(res)
            setSearchStatus(true)
            setDataStatus(false)

        }

    }







    return (


        <>


            <section className='Reports'>


                <div className='filters'>


                    <div>

                        <h5>Patient Reports</h5>

                    </div>


                    <div className='d-flex justify-content-center align-items-center' style={{ width: '45%' }}>


                        <button className='Filter-btn' onClick={() => { setFilterStatus(!FilterStatus) }}>Apply Filter <i className="fa-solid fa-filter"></i></button>

                        <div className='filter-search'>

                            <input type="search" onChange={(e) => { handleSearch(e) }} placeholder='Search by Doctor Name/Patient Name/Test Name...' />
                            <i class="fa-solid fa-magnifying-glass"></i>

                        </div>


                    </div>


                </div>



                {

                    FilterStatus &&

                    <div className='filter-form'>


                        <form onSubmit={(e) => { handleSubmit(e) }}>

                            {/* FROMS */}
                            <div className='form-data'>




                                <div className='d-flex justify-content-between'>


                                    {/* FROM DATE */}
                                    <div className='form-input'>

                                        <label>Form Date</label>
                                        <input style={{ paddingLeft: '3.2rem', paddingRight: '1.8rem' }} onChange={(e) => { setFormData({ ...formData, fromDate: e.target.value }) }} type="date" />

                                    </div>


                                    {/* TO DATE */}
                                    <div className='form-input'>

                                        <label style={{ marginRight: '2rem', marginLeft: '4rem' }}>To Date</label>

                                        <input type="date" style={{ paddingLeft: '3.2rem', paddingRight: '1.7rem' }} onChange={(e) => { setFormData({ ...formData, ToDate: e.target.value }) }} />

                                    </div>



                                    {/* REFER BY */}
                                    <div className='form-input'>

                                        <label>Refer by</label>

                                        <select name="" id="" onChange={(e) => { setFormData({ ...formData, Referby: e.target.value }) }}>

                                            <option value="">DOC NAME</option>
                                            <option value="Dr.Smith">Dr.Smith</option>
                                            <option value="Dr.Arun Thambi">Dr.Arun Thambi</option>
                                            <option value="Dr.Jose">	Dr.Jose</option>
                                            <option value="Dr.Vignesh">Dr.Vignesh</option>
                                            <option value="Dr.Sharon">Dr.Sharon</option>
                                            <option value="Dr.Raj">Dr.Raj</option>

                                        </select>

                                    </div>


                                </div>




                                <div className='d-flex justify-content-between mt-3'>


                                    {/* PATIENT NAME */}
                                    <div className='form-input' >

                                        <label style={{ marginRight: '1rem' }}>Patient Name</label>

                                        <input type="text" placeholder='Enter Patient name' onChange={(e) => { setFormData({ ...formData, patientName: e.target.value }) }} />

                                    </div>



                                    {/* HOSPITAIL ID */}
                                    <div className='form-input' >

                                        <label style={{ marginLeft: '1rem' }}>Hospitail ID</label>

                                        <input type="text" placeholder='DH2023/000123456' onChange={(e) => { setFormData({ ...formData, hospitalId: e.target.value }) }} />

                                    </div>



                                    {/* STATUS */}
                                    <div className='form-input'>

                                        <label >Status</label>

                                        <select style={{ paddingRight: '4.2rem' }} name="" id="" onChange={(e) => { setFormData({ ...formData, status: e.target.value }) }}>

                                            <option value="">Status</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Lab Dropped">Lab Dropped</option>
                                            <option value="Partial Report">Partial Report </option>

                                        </select>

                                    </div>



                                </div>



                                {/* BILL NO */}
                                <div className='d-flex mt-3'>


                                    <div className='form-input'>

                                        <label style={{ marginRight: '4rem' }}>Bill No</label>

                                        <input type="text" placeholder='DH223/0003424' onChange={(e) => { setFormData({ ...formData, billno: e.target.value }) }} />

                                    </div>


                                </div>



                            </div>



                            {/* SUBMIT BTN */}
                            <div className='submit mt-3'>


                                <p>Please provide search criteria and hit search button.</p>


                                <div className='d-flex'>

                                    <button type='submit' className='Search-btn'><i class="fa-solid fa-magnifying-glass"></i>  Search</button>

                                    <button className='clear-btn' onClick={clearbtn}> <i class="fa-solid fa-xmark"></i>  Clear</button>

                                </div>




                            </div>


                        </form>


                    </div>
                }


                <div className=''>

                    {/* Table-DATA */}
                    <div className='table-data'>


                        <table className='table'>


                            <thead className='border shadow'>


                                <tr>

                                    <th>Order No</th>
                                    <th>Date</th>
                                    <th>Patient Name</th>
                                    <th>Hospital ID</th>
                                    <th>Test Name</th>
                                    <th>Doctor Name</th>
                                    <th>ETA</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>


                            </thead>

                            <tbody>


                                {

                                    currentItems.length > 0 && !DataStatus && !searchStatus ?

                                        currentItems.map((item, index) => (

                                            <tr className="table-hover"

                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}

                                            >

                                                <td>{item.orderNo}</td>
                                                <td>{item.date}</td>
                                                <td>{item.patientName}</td>
                                                <td>{item.hospitalId}</td>
                                                <td>{item.testName}</td>
                                                <td>{item.doctorName}</td>
                                                <td>{item.eta}</td>

                                                {
                                                    item.status == "Ready" ?


                                                        <td className='status-ready text-center'>

                                                            <p>{item.status} </p>

                                                        </td>


                                                        :

                                                        item.status == "Lab Dropped" ?

                                                            <td className='status-droped text-center'>

                                                                <p>{item.status} </p>

                                                            </td>

                                                            :

                                                            <td className='status-partial text-center'>

                                                                <p>{item.status} </p>


                                                            </td>
                                                }


                                                <td>
                                                    <button className='table-btn '><i class="fa-solid fa-download "></i></button>

                                                    <button className='table-btn'> <i class="fa-solid fa-message"></i></button>

                                                </td>


                                                {/* HOVER DATA */}
                                                {

                                                    hoveredRow == index && !DataStatus &&

                                                    <div className='hover-deatils'>

                                                        <h6>{item.patientName}</h6>

                                                        <div className='d-flex'>

                                                            <p>Age:{item.age}</p>

                                                            <p>Gender: {item.gender}</p>

                                                        </div>

                                                        <div className='d-flex mt-2'>

                                                            <p>Bill No:AC125S1A5</p>

                                                            <p>Bill Date:{item.date}</p>

                                                        </div>


                                                    </div>
                                                }






                                            </tr>

                                        ))

                                        :

                                        <h1></h1>
                                }





                                {/* FILTERED DATA POPULATE */}
                                {

                                    DataStatus && pages.length > 0 && !searchStatus ?

                                        pages.map((fl, index) => (

                                            <tr

                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}

                                            >


                                                <td>{fl.orderNo}</td>
                                                <td>{fl.date}</td>
                                                <td>{fl.patientName}</td>
                                                <td>{fl.hospitalId}</td>
                                                <td>{fl.testName}</td>
                                                <td>{fl.doctorName}</td>
                                                <td>{fl.eta}</td>



                                                {
                                                    fl.status == "Ready" ?


                                                        <td className='status-ready text-center'>

                                                            <p>{fl.status} </p>

                                                        </td>


                                                        :

                                                        fl.status == "Lab Dropped" ?

                                                            <td className='status-droped text-center'>

                                                                <p>{fl.status} </p>

                                                            </td>

                                                            :

                                                            <td className='status-partial text-center'>

                                                                <p>{fl.status} </p>


                                                            </td>

                                                }


                                                <td>
                                                    <button className='table-btn '><i class="fa-solid fa-download "></i></button>

                                                    <button className='table-btn'> <i class="fa-solid fa-message"></i></button>

                                                </td>



                                                {/* HOVER DATA */}
                                                {

                                                    hoveredRow == index &&

                                                    <div className='hover-deatils'>

                                                        <h6>{fl.patientName}</h6>

                                                        <div className='d-flex'>

                                                            <p>Age:{fl.age}</p>

                                                            <p>Gender: {fl.gender}</p>

                                                        </div>

                                                        <div className='d-flex mt-2'>

                                                            <p>Bill No:AC125S1A5</p>

                                                            <p>Bill Date:{fl.date}</p>

                                                        </div>


                                                    </div>
                                                }


                                            </tr>

                                        ))


                                        :



                                        <h1></h1>


                                }




                                {/* SEARCH DATA */}
                                {

                                    searchStatus && !DataStatus &&

                                    Searchvalue.map((item, index) => (

                                        <tr

                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}

                                        >


                                            <td>{item.orderNo}</td>
                                            <td>{item.date}</td>
                                            <td>{item.patientName}</td>
                                            <td>{item.hospitalId}</td>
                                            <td>{item.testName}</td>
                                            <td>{item.doctorName}</td>
                                            <td>{item.eta}</td>



                                            {
                                                item.status == "Ready" ?


                                                    <td className='status-ready text-center'>

                                                        <p>{item.status} </p>

                                                    </td>


                                                    :

                                                    item.status == "Lab Dropped" ?

                                                        <td className='status-droped text-center'>

                                                            <p>{item.status} </p>

                                                        </td>

                                                        :

                                                        <td className='status-partial text-center'>

                                                            <p>{item.status} </p>


                                                        </td>

                                            }


                                            <td>
                                                <button className='table-btn '><i class="fa-solid fa-download "></i></button>

                                                <button className='table-btn'> <i class="fa-solid fa-message"></i></button>

                                            </td>



                                            {/* HOVER DATA */}
                                            {

                                                hoveredRow == index &&

                                                <div className='hover-deatils'>

                                                    <h6>{item.patientName}</h6>

                                                    <div className='d-flex'>

                                                        <p>Age:{item.age}</p>

                                                        <p>Gender: {item.gender}</p>

                                                    </div>

                                                    <div className='d-flex mt-2'>

                                                        <p>Bill No:AC125S1A5</p>

                                                        <p>Bill Date:{item.date}</p>

                                                    </div>


                                                </div>
                                            }


                                        </tr>



                                    ))




                                }




                            </tbody>


                        </table>



                        {/* PAGINATION */}
                        <div className="pagination">

                            {data.length > itemsPerPage && (

                                <ul className="pagination-list">

                                    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (


                                        <li key={i} className={currentPage === i + 1 ? 'pagination-item active' : 'pagination-item'}>
                                            <button onClick={() => paginate(i + 1)}>{i + 1}</button>
                                        </li>


                                    ))}


                                </ul>
                            )}


                        </div>


                    </div>

                </div>


            </section>


        </>


    )



}

export default Reports