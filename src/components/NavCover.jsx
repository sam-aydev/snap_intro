export default function NavCover({children}){
    return(
        <div>
            <nav className='flex justify-between px-12'>
                {children}   
            </nav>
        </div>
    )
}