export default function AllCover({children, menu}){
    return(
        <div className={menu ? 'bg-secondary h-full md:bg-primary md:h-full' : 'md:bg-primary md:h-screen' }>
            {children}
        </div>
    )
}