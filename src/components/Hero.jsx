
import Spline from "@splinetool/react-spline";
import { styles } from "../styles";
import BotpressChatbot from './BotpressChatbot';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <Spline scene="https://prod.spline.design/pBZZq92Kof31JmTA/scene.splinecode" className="absolute inset-0 w-full h-full" />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>
            Hi, I am <span className='text-[#915EFF]'>Subhashri Nath</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
      
      <div style={{ height: '500px' }}>
        <BotpressChatbot />
      </div>
      
    </section>
  );
};

export default Hero;
