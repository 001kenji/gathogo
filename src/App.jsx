import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {useForm} from 'react-hook-form'
import pick1 from './assets/pick1.jpg'
import viteLogo from '/vite.svg'
import lion from './assets/lion.png'
import tick from './assets/tick.jpg'
import fail from './assets/fail.jpg'
import loadImg from './assets/loader.png'
import qrTelegram from './assets/qr.png'
import './App.css'
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import kenyaFlag from './assets/kenyaFlag.png'
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
function App() {
  const [theme, setTheme] = useState('light')
  const [themeIcon, setThemeIcon] = useState(true)

  const {register,getValues,formState,handleSubmit} = useForm({
    defaultValues : {
        from_name : '',
        to_name : 'NICHOLAS',
        email_id :'kariuki12nicholas@gmail.com',
        message : ''
    },
    mode : 'onTouched'
  }) 
  const {errors,isSubmitting} = formState
  function themeSetter(props) {

      if(props == 'moon') {
        setThemeIcon(true)
        setTheme('light')
      }else if(props == 'light'){
        setThemeIcon(false)
        setTheme('dark')
      }
  }

  var formEmail =  document.getElementById('emailForm')
  function EmailSender(event) {
    event.preventDefault();
    
    var btn = document.getElementById('button')
    btn.innerHTML = 'Sending...';
      ShowLoad('show')
    const serviceID = 'service_vlv7qth';
    const templateID = 'template_32wnh2a';
  
    emailjs.sendForm(serviceID, templateID, formEmail)
     .then(() => {
       btn.innerHTML = 'Send';
     ShowLoad('hide')
      ShowSuccess('show')
      setInterval(() => {
         ShowSuccess('hide')
      }, 1600);
      
     }, (err) => {
       btn.value = 'Send';
       //alert(JSON.stringify(err));
       ShowLoad('hide')
       Showerror('show')
       setTimeout(() => {
          Showerror('hide')
       }, 1600);
       
     });
     
   
  }



  const [progError,seterror] = useState(false)
  const [progSuccess,setSuccess] = useState(false)
  const [progLoad, setload] = useState(false)
  const progressSuccess = {
      display : progSuccess ? 'flex' : 'none'
  }
  const progressError = {
      display : progError ? 'flex' : 'none'
  }
  const progressLoad = {
      display : progLoad ? 'flex' : 'none'
  }

  function Showerror(props){
    if(props == 'show'){
       seterror(true)
    }else if(props == 'hide'){
        seterror(false)
    }
}
function ShowSuccess(props){
    if(props == 'show'){
        setSuccess(true)
    }else if(props == 'hide'){
        setSuccess(false)
    }
}
function ShowLoad(props){
    const loadDiv = document.getElementsByName('loadDiv')
    if(props == 'show'){
        setload(true)
    }else if(props == 'hide'){
        setload(false)
    }
}


  return (
    <>
    <div id='page' className={`${theme}`}>
        <div  className='dark:bg-slate-800 text-slate-50 w-full  bg-no-repeat bg-[url("./assets/bg1.png")] bg-cover bg-fixed  '>
          {/* header for the theme */}
        
         





  {/* for the rest of the mega card */}
          <div className='dark:text-white bg-slate-800 bg-opacity-60 dark:opacity-90  dark:bg-slate-800' id='megaCard'>
  {/* for the icon div */}
  <div style={progressError} className="top-0 sticky" name='errorDiv' id="notifier">
                <img className="w-6 animate-ping p-1.5 sm:w-8 "  src={fail} alt="" />
              <p className="text-sm   sm:text-base" id="error">Error</p>   
            </div>
            <div style={progressSuccess} className="top-0 sticky" name='successDiv' id="notifier" > 
                <img className="w-6 sm:w-8 "  src={tick} alt="" />
                <p className="bg-black  text-sm sm:text-base rounded-sm top-1 text-green-500 font-bold p-2 mx-auto w-fit">Successfull</p>
           </div>
            <div style={progressLoad} className="top-0 sticky" name='loadDiv' id="notifier">
                <img className="w-6 bg-blue-500 p-1 animate-spin sm:w-8 "  src={loadImg} alt="" />
                <p className="bg-black animate-pulse text-sm sm:text-base rounded-sm top-1 text-blue-500 font-bold p-2 mx-auto w-fit" >Loading...</p>
            </div>


            <div id='themeiconDiv' className='w-full sticky top-0 dark:bg-slate-800  h-full'>
                      <div id="themeicons" className=''>
                        {themeIcon ? <MdOutlineWbSunny
                        onClick={() => themeSetter('light')} 
                        className=' bg-slate-100 text-[30px] text-black p-1 rounded-full w-8 flex justify-center align-middle'/> :
                          <FaMoon 
                          onClick={() => themeSetter('moon')}
                            className=' bg-slate-700 text-[25px] p-1 text-center text-white  rounded-full w-8 flex justify-center align-middle' /> }

                      </div>
            </div>

              <div className='text-slate-50 flex sm:gap-6 flex-row gap-4 p-3 sm:justify-end justify-center dark:text-slate-100 ' id='socialDiv' >
                  <a href="https://www.facebook.com/profile.php?id=100090430154934"><FaFacebook className=' text-blue-600 text-2xl p-1 bg-white rounded-md' /></a>
                  <a href=" https://whatsapp.com/dl/code=AvT9SeM6rL"><RiWhatsappFill className=' text-green-600  text-2xl p-1 bg-white rounded-md' /></a>
                  <a href="https://instagram.com/kariukinicholas2023?igshid=NzZlODBkYWE4Ng=="><FaInstagramSquare className=' bg-black text-pink-600 text-2xl p-1  rounded-md' /></a>
                  <a href="https://twitter.com/Nicolae_karis
 "><FaSquareTwitter className=' text-blue-600  text-2xl p-1 bg-white rounded-md' /></a>
                  <a href=""><FaTelegram className=' text-blue-600  text-2xl p-1 bg-white rounded-md' /></a>
                


              </div>
  {/* for the two divs card */}
              <div id='masterDiv'>
  {/* fist div */}
              <div className='sm:border-amber-500   ' id='firstDiv'>
                <div id='dpPickDiv' className='grid justify-center sm:align-middle sm:justify-start align-middle'>
                  <img className='rounded-md sm:w-60' id='dpPick' src={lion} alt="" />
                </div>
                <div id='personalDetailsDiv' className='text-sm  '>
                  <address className='flex sm:top-4  flex-col gap-4 font-semibold text-white'>
                  <p>NICHOLAS GATHOGO</p>
                  <p>BARCHELOR OF SCIENCE IN COMPUTER SCIENCE</p>
                  <p>+254741540233</p>
                  <p>MALE</p>
                  <p>STUDENT</p>
                  <p>MURANG'A UNIVERSITY OF TECHNOLOGY</p>
                  <p className='flex text-center sm:text-left sm:justify-start gap-1 align-middle justify-center flex-rot'>KENYA <img className=' align-middle' width={20} src={kenyaFlag} alt="" /> </p>
              
                  </address>
                
                </div>
              </div>
  {/* second div */}
                <div id='secondDiv'>

                <div className='sm:justify-center sm:align-middle sm:text-left sm:p-3'>

                <h1 className=' opacity-80 text-yellow-400' >SPECIFICAIONS</h1>
                <address id='specs' role="list" className='flex list-disc marker:text-transparent   flex-col gap-4  text-white' id='specsAddress'>
                 <ul className='grid justify-center gap-3'>
                  <li>Cyber Security</li>
                  <li>programming language</li>
                  <li>networking</li>
                  <li>Database Management</li>
                  <li></li>
                 </ul >
                  
                </address>

                </div>

               <div>

                {/* email div */}
               <div id="Email" className="mx-auto flex  justify-center  mt-2 shadow-sm sm:shadow-cyan-600 sm:shadow-md shadow-purple-400">
            <div id="emailformDiv" >

            <form onSubmit={EmailSender} id="emailForm" noValidate  className="emailForm">
                <label htmlFor="from_name">Enter your name</label>
                {errors.sendersName && <p id="error">{errors.sendersName?.message}</p>}
                <input  id="from_name" name="from_name" type="text" {...register('from_name',{
                    required :  'Enter name',
                    minLength : {
                        value : 5,
                        message : 'less characters'
                    }
                })} />
                <div id='noDisplay'>
                    <label  htmlFor="to_name">Enter reciever's name</label>
                                    {errors.sendersEmail && <p id="error">{errors.sendersEmail?.message}</p>}
                                    <input id="to_name" name="to_name" type="text" {...register('to_name',{
                                        required : 'Enter name',
                                        minLength : {
                                            value : 5,
                                            message : 'less characters'
                                        }
                                    })} />
                                    <label htmlFor="email_id">Recipients email</label>
                                    <input id="email_id" name="email_id" type="emial"{...register('email_id',{
                                        disabled : false,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                          }
                                    })} />
                </div>
                


                <label htmlFor="message">Enter message</label>
                {errors.message && <p id="error">{errors.message?.message}</p>}
                <textarea   name="message" id="message" {...register('message',{
                    required : 'Enter message'
                })}></textarea>


                <button id="button" disable={isSubmitting} type="submit">Send</button>
                </form>
                {/* <form onSubmit={EmailSender} id="emailForm" noValidate  className="emailForm">
                <label htmlFor="from_name">Enter your name</label>
                {errors.sendersName && <p id="error">{errors.sendersName?.message}</p>}
                <input placeholder='name' className='dark:bg-slate-800'  id="from_name" name="from_name" type="text" {...register('from_name',{
                    required :  'Enter name',
                    minLength : {
                        value : 5,
                        message : 'less characters'
                    }
                })} />

                <div id='noDisplay'>
                  <label id='noDisplay'  htmlFor="to_name">Enter reciever's name</label>
                {errors.sendersEmail && <p id="error">{errors.sendersEmail?.message}</p>}
                <input id="to_name" name="to_name" type="text" {...register('to_name',{
                    required : false,
                    value: 'NICHOLAS'
                })} />
                <label id='noDisplay' htmlFor="email_id">Recipients email</label>
                <input  id="email_id" name="email_id" type="emial"{...register('email_id',{
                    disabled : false,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                })} />

                </div>
                

                <label htmlFor="message">Enter message</label>
                {errors.message && <p id="error">{errors.message?.message}</p>}
                <textarea placeholder='message'   name="message" id="message" {...register('message',{
                    required : 'Enter message'
                })}></textarea>


                <button id="button" disable={isSubmitting} type="submit">Send</button>
                </form> */}



            </div>
        </div>
                </div>       

                </div>
                <div className='flex w-full mt-4  justify-center'>
                  <img className=' w-16 bg-black' src={qrTelegram} alt="" />
               
                </div> 
              </div>

        </div>

        </div>
       
    </div>
    </>
  )
}

export default App
