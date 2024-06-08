import React from 'react'
import './Dash.css'
import { useEffect } from 'react'
import Reports from '../Components/Reports'
import { useNavigate } from 'react-router-dom'

function Dash() {


  const navigate = useNavigate()



  // TO CHECK IF THE USER IS LOGINED OR NOT
  useEffect(()=>{


    const user = sessionStorage.getItem("Username")

    const checkUser = ()=>{

      if(!user){

        alert("Please Login First..!")
        navigate('/')

      }

    }

    checkUser()


  },[])



  // LOGOUT
  const logout = () => {

    sessionStorage.removeItem("Username")
    navigate('/')



  }




  return (



    <>

      {/* DASH BOARD */}
      <section className='Dash'>


        <nav>


          <div className='d-flex justify-content-between align-items-center'>


            <div className='nav-logo'>

              <img src="/Logo.png" className='img-fluid' alt="logo" />

            </div>



            <div className='nav-items'>


              <div className='d-flex justify-content-center align-items-center'>

                <p>{sessionStorage.getItem("Username")}</p>

                <img src="/User-Logo.png" className='img-fluid' alt="user-logo" />

              </div>



              <div>

                <button className='logout-btn' onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>

              </div>


            </div>


          </div>



        </nav>


        <Reports />



        <footer>


          <p>Copyright &copy; 2023 Access Home Lab Solutions</p>

          <h5><i class="fa-solid fa-phone"></i> <a className='phone-a' href="">(+91)9288008801</a></h5>


          <div className='foot-privacy'>

            <a href="">Terms and Conditions</a>

            <a href="">Privacy Policy</a>

          </div>


        </footer>



      </section>




    </>





  )





}

export default Dash