
// Contact
const InlineContent = ({logo,text})=>{
    return(
        <>
            <div className="inline-flex gap-1">
                <div className="text-2xl text-white">
                <ion-icon name={logo}></ion-icon>
                </div>
                <span>{text}</span>
            </div>
        </>
    )
}
export default  InlineContent;