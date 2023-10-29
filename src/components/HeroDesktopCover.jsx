export default function HeroDesktopCover({children}){
    return(
        <div className='md:flex md:flex-row-reverse md:space-x-32 md:gap-4 md:w-full '>
            {children}
        </div>
    )
}