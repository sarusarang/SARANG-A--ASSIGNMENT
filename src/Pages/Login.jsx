import React from 'react'
import { useState, useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {



    return (


        <>

            {/* Login Page */}
            <section className='login-main d-flex  justify-content-around align-items-end pb-3 pt-3'>


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

                            <form>


                                <div className='w-100 login-input'>

                                    <label htmlFor="">Username</label> <br />
                                    <input type="email" placeholder='Enter email id' />

                                </div>


                                <div className='w-100 login-input mt-2'>

                                    <label htmlFor="">Password</label> <br />
                                    <input type="password" placeholder='password' />

                                </div>


                                <div className='d-flex justify-content-center mt-3 mb-4'>

                                    <button type='submit' className='login-btn'>SUBMIT</button>

                                </div>

                            </form>


                            <div className='text-center' >

                                <Link style={{ textDecoration: 'underline', color: '#505050' }}>Reset Password</Link>

                            </div>


                        </div>


                    </div>


                    {/* Vector-3 */}
                    <div className='d-flex align-items-center mt-3'>

                        <img src="/Vector 5.png" className='img-fluid' style={{ marginLeft: '-1rem' }} alt="" />

                        <h5 style={{ color: '#1F6CAB', marginLeft: '4rem',fontWeight:'bold' }}><i class="fa-solid fa-phone"></i> (+91)9288008801</h5>


                    </div>

                    <div className='mt-4'>

                        <p style={{ fontSize: '14px' }} className='text-center'>I hereby agree and accept the <a href="" style={{ color: '#1F6CAB', fontWeight: '500' }}>Terms of service</a> and <a style={{ color: '#1F6CAB', fontWeight: '500' }} href="">privacy policy</a></p>

                    </div>




                </div>



                {/* Footer */}
                <div className='d-flex justify-content-between foot-link'>

                    {/* <p>Copyright &copy; 2023 Access Home Lab Solutions</p> */}

                    <p>All Right Reserved | <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a></p>

                </div>



            </section>



        </>



    )



}

export default Login