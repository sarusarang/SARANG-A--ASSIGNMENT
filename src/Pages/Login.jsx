import React from 'react'
import { useState, useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { UserLogin } from '../SERVICES/AllApi'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Login() {



    const navigate = useNavigate()


    // TO STORE USERs EMAIL & PASSWORD OF LOGIN
    const [Data, setData] = useState({

        email: "", password: ""

    })



    // TO CHECK THE INPUT FEILD IS CORRECT OR NOT
    const [VaildStatus, setVaildStatus] = useState(false)




    // DUMMY USERS FOR LOGIN 
    const Users = [

        { email: "user123@gmail.com", password: "12345" }, { email: "ajith123@gmail.com", password: "12345" }

    ]



    // TO HANDLE LOGIN WHEN THE LOGIN BUTTON IS CILCKED
    const handleSubmit = async () => {

        const { email, password } = Data


        // IF THERE IS AN SERVER DO THIS

        // try {

        //     if (!email || !password) {

        //         setVaildStatus(true)


        //     } else {

        //         const result = await UserLogin({ email, password })

        //         if (result.status == 200) {

        //             sessionStorage.setItem("Username", email)
        //             toast.success(result.message)

        //         }
        //         else {


        //             toast.error(result.message)


        //         }

        //     }

        // }
        // catch(err){

        //     console.log(err);
        // }


        if (!email || !password) {

            setVaildStatus(true)

        } else {


            const Result = Users.find((item) => (item.email == email))




            if (Result) {

                sessionStorage.setItem("Username", email)

                navigate('/dash')

                setVaildStatus(false)

            } else {

                setVaildStatus(true)

            }


        }


    }






    return (


        <>

            {/* Login Page */}
            <section className='login-main d-flex  justify-content-around align-items-end pb-3 pt-3'>


                {/* FOOTer-1 */}
                <div className='foot-link'>

                    <p>Copyright &copy; 2023 Access Home Lab Solutions</p>

                </div>



                {/* LOGIN FORM */}
                <div className='login'>


                    {/* VECTOR-1 */}
                    <div className='d-flex justify-content-start'>

                        <img src="/Vector 7.png" className='img-fluid' alt="" />

                    </div>



                    {/* lOGO */}
                    <div className='d-flex justify-content-center'>

                        <img src="/Logo.png" className='img-fluid' alt="" />

                    </div>



                    {/* VECTOR-2 */}
                    <div className='d-flex justify-content-end'>

                        <img src="/Vector 6.png" className='img-fluid' alt="" />

                    </div>

                    {/* Heading */}
                    <div className='login-head'>

                        <h3 className='text-center'> Report Download Portal</h3>

                    </div>


                    {/* LOGIN-FORM */}

                    <div className='w-100 d-flex  justify-content-center'>


                        <div className='login-form p-3'>

                            <h6 className='text-center'>Login</h6>

                            <form onSubmit={(e) => { e.preventDefault() }}>


                                <div className='w-100 login-input'>

                                    <label htmlFor="">Username</label> <br />
                                    <input type="email" onChange={(e) => { setData({ ...Data, email: e.target.value }) }} placeholder='Enter email id' />

                                </div>


                                <div className='w-100 login-input mt-2'>

                                    <label htmlFor="">Password</label> <br />
                                    <input type="password" onChange={(e) => { setData({ ...Data, password: e.target.value }) }} placeholder='password' />

                                </div>


                                <div className='d-flex justify-content-center mt-3 mb-4'>

                                    <button type='submit' onClick={handleSubmit} className='login-btn'>SUBMIT</button>

                                </div>

                            </form>


                            <div className='text-center' >

                                <Link style={{ textDecoration: 'underline', color: '#505050' }}>Reset Password</Link>

                            </div>


                        </div>


                    </div>

                    {

                        VaildStatus &&

                        <p className='text-center' style={{ color: "red", textDecoration: 'underline', fontWeight: '600', fontSize: 'smaller' }}>Wrong Credentials! your email Id or Password entered is Wrong</p>

                    }


                    {/* Vector-3 */}
                    <div className='d-flex align-items-center mt-3'>

                        <img src="/Vector 5.png" className='img-fluid' style={{ marginLeft: '-1rem' }} alt="" />

                        <h5 style={{ color: '#1F6CAB', marginLeft: '4rem', fontWeight: 'bold' }}><i class="fa-solid fa-phone"></i> (+91)9288008801</h5>


                    </div>

                    <div className='mt-4'>

                        <p style={{ fontSize: '14px' }} className='text-center'>I hereby agree and accept the <a href="" style={{ color: '#1F6CAB', fontWeight: '500' }}>Terms of service</a> and <a style={{ color: '#1F6CAB', fontWeight: '500' }} href="">privacy policy</a></p>

                    </div>




                </div>



                {/* Footer-2 */}
                <div className='d-flex justify-content-between foot-link'>


                    <p>All Right Reserved | <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a></p>

                </div>



                <Toaster richColors position='top-center' />


            </section>



        </>



    )



}

export default Login