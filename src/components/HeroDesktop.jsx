import dataBiz from '../assets/client-databiz.svg';
import audioPhile from '../assets/client-audiophile.svg';
import meet from '../assets/client-meet.svg';
import maker from '../assets/client-maker.svg';

export default function HeroDesktop(){
    return(
        <div className='text-center mt-6 px-16 md:w-1/2 md:text-left md:mt-32  md:px-0'>
          <h2 className='text-[27px] font-bold md:text-4xl lg:text-8xl'>Make <br className='hidden md:flex' /> remote work</h2>
          <p className=' text-[13px] font-medium text-secondary mt-3 md:mt-6 md:text-[14px] lg:text-[18px]'>Get your team in sync, no matter your <br/>
           location. Streamline processes, create <br/>
           team rituals, and watch productivity soar.
          </p>
          <button className='bg-tertiary text-primary px-4 mt-4 rounded-md py-2 md:mt-8'>Learn more</button>
          
          <div className='md:flex  mt-24 hidden md:gap-7'>
            <div>
              <img src={dataBiz} alt="databiz" className='w-16 h-5' />
            </div>
            <div>
              <img src={audioPhile} alt="audiophile" className='w-16 h-5' />
            </div>
            <div>
              <img src={meet} alt="meet" className='w-16 h-5' />
            </div>
            <div>
              <img src={maker} alt="maker" className='w-16 h-5' />
            </div>
          </div>
        </div>
    )
}