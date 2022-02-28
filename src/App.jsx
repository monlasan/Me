import './App.css';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ScrollOut from 'scroll-out';
import BackgroundHaze from '@/assets/images/back.png';
import Photo from '@/assets/images/me.jpg';
import Marineland from '@/assets/images/works/marineland.jpg';
import FondationVissin from '@/assets/images/works/fondationvissin.jpg';
import Carrecube from '@/assets/images/works/carrecube.jpg';

import Awwork from '@/components/Work';
import { FaHeart, FaPaperPlane, FaEnvelope } from 'react-icons/fa';

function App() {
  const [ActualDate, setActualDate] = useState('');
  useEffect(() => {
    ScrollOut();
  }, []);
  useEffect(() => {
    let date = new Date();
    setActualDate(date.getUTCFullYear());
  }, []);

  const form = useRef();
  const formName = useRef();
  const formEmail = useRef();
  const formMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          formName.current.value = '';
          formEmail.current.value = '';
          formMessage.current.value = '';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='bg-[#010101] z-0 relative overflow-y-hidden'>
      <img
        src={BackgroundHaze}
        className='absolute max-w-6xl sm:max-w-7xl top-0 rotate-180 left-[50%] translate-x-[-50%] translate-y-[-35%] md:translate-y-[-30%] -z-10'
        alt='Haze Background'
      />
      {/* FIRST SECTION */}

      <div className='grid z-10 place-items-center text-white min-h-screen w-full'>
        <div className='z-10'>
          <span className='overflow-hidden block'>
            <p className='anime_myname text-7xl sm:text-6xl z-10 duration-75 ease-out font-noto'>
              Khaled <br className='sm:hidden' /> Sanny
            </p>
          </span>
          <span className='overflow-hidden block'>
            <p className='anime_field text-xl text-gray-300 z-10 font-montserrat mt-2'>
              UI / UX / Web Development
            </p>
          </span>
          <button className='anime_button hover:bg-indigo-900/80 z-20 border bg-indigo-900 duration-75 p-2 mt-8 font-montserrat'>
            <a href='../sanny_khaled_dev_resume.pdf' download>
              Download resume
            </a>
          </button>
        </div>
      </div>

      {/* SECOND SECTION */}

      <div className='flex flex-col pb-20 items-center min-h-screen w-full'>
        <div className=' rounded-full relative z-20 bg-indigo-900'>
          <img
            src={Photo}
            id='mypic'
            alt="Sanny Khaled's Photo"
            className='rounded-full z-30 w-72 sm:w-80 opacity-60'
          />
          <h1
            data-scroll
            id='aboutme'
            className='anime_me top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-7xl sm:text-8xl text-white absolute font-noto font-bold'
          >
            About me
          </h1>
        </div>
        <p className='max-w-lg mx-12 mt-20 mb-20 text-center font-montserrat text-gray-500'>
          <span className='text-xl text-indigo-500 font-mono'>HI,</span> my name
          is Sanny Khaled. I have been studying web development and UI/UX Design
          since October 2019. I love creative works and developing awesome
          websites.
        </p>
        <div className='text-gray-500'>
          <h1
            data-scroll
            className='anime_leftToRight text-white mb-16 md:mt-16 text-4xl text-center font-noto'
          >
            Skills
          </h1>
          <div className='flex flex-col sm:flex-row gap-y-20 gap-x-20 font-montserrat'>
            <ul className='relative grid gap-2 hover:text-gray-400 duration-150'>
              <li className='absolute -top-5 -left-5 block w-3 h-3 bg-indigo-500 rounded-full'></li>
              <li>Html</li>
              <li>Css / Scss</li>
              <li>Javascript</li>
              <li>Php</li>
              <li>Git</li>
            </ul>
            <ul className='relative grid gap-2 hover:text-gray-400 duration-150'>
              <li className='absolute -top-5 -left-5 block w-3 h-3 bg-indigo-500 rounded-full'></li>
              <li>React JS</li>
              <li>Tailwind</li>
              <li>Node JS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
            <ul className='relative grid gap-2 hover:text-gray-400 duration-150'>
              <li className='absolute -top-5 -left-5 block w-3 h-3 bg-indigo-500 rounded-full'></li>
              <li>Wordpress</li>
              <li>Figma</li>
              <li>Affinity Designer</li>
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex z-10 items-center justify-center flex-col pt-8 lg:pt-28 text-gray-500'>
        <h1
          data-scroll
          className='anime_leftToRight text-white text-4xl text-center font-noto'
        >
          Works
        </h1>
        <p className='max-w-xs sm:max-w-md my-16 text-center font-montserrat'>
          A collection of my favorite projects I’ve developed recently. Feel
          great while sharing them...
        </p>
        <div className='grid gap-y-16'>
          <Awwork picture={Marineland}>
            <p>Marine land</p>
            <p>
              A project for Marine Land, a maritime equipment supplier in Benin
              and sub-region that needed an online presence to reach more
              customers and display its product catalog.
            </p>
          </Awwork>
          <Awwork picture={FondationVissin}>
            <p>Fondation vissin</p>
            <p>
              I designed and developed the new website for the NGO Fondation
              Vissin to bring a touch of modernity and a boost to their
              humanitarian project.
            </p>
          </Awwork>
          <Awwork picture={Carrecube}>
            <p>CarreCube</p>
            <p>
              CarreCube needed a simple and modern website specially designed to
              present the services of their construction and real estate agency.
            </p>
          </Awwork>
        </div>
      </div>
      <div className='grid place-items-center pt-24 text-gray-500'>
        <div className='w-full grid justify-center pb-36'>
          <h1
            data-scroll
            className='anime_bottomToTop pb-16 lg:pt-16 text-white font-noto text-center text-4xl'
          >
            Let's get in <br /> touch
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='relative grid md:grid-cols-2 grid-cols-1 max-w-4xl gap-4 mx-8'
          >
            <div className='grid gap-4 font-montserrat'>
              <input
                required
                type='name'
                name='user_name'
                ref={formName}
                className='p-2 bg-black outline-none focus:border-indigo-300 w-full border-l md:border-r md:border-l-0 placeholder-gray-500 border-indigo-900'
                placeholder='What is your name ?'
              />
              <input
                required
                type='email'
                ref={formEmail}
                name='user_email'
                className='p-2 bg-black outline-none focus:border-indigo-300 w-full border-l md:border-r md:border-l-0 placeholder-gray-500 border-indigo-900'
                placeholder='Set your email please'
              />
            </div>
            <textarea
              required
              ref={formMessage}
              name='message'
              className='w-full p-2 font-montserrat focus:border-indigo-300 bg-black outline-none border-l border-indigo-900'
              id=''
              defaultValue='Message'
              cols='30'
              rows='3'
            ></textarea>
            <button className='font-montserrat absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-24 mt-10 text-sm p-3 px-8 bg-indigo-900/10 hover:bg-indigo-900 duration-75 text-gray-300'>
              Send message
            </button>
            <div className='absolute flex flex-col items-center bottom-0 left-[50%] translate-x-[-50%] translate-y-52'>
              or
              <div className='flex gap-x-10 opacity-80 text-indigo-900 text-xl mt-8'>
                <a href='https://t.me/khaled_sama'>
                  <FaPaperPlane />
                </a>
                <a href='mailto:khaledsannyaml@gmail.com'>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* THIRD SECTION */}

      <div className='grid z-10 place-items-center pt-32 text-gray-700'>
        <p className='p-3 font-mono text-center'>
          &copy; {ActualDate} Khaled Sanny. <br className='sm:hidden' /> Made
          with
          <FaHeart className='text-red-600 inline-block mx-2' />
          by me
        </p>
      </div>
    </div>
  );
}

export default App;
