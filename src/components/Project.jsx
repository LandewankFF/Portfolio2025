import Title from './Button/Title'
import cardProject from './cardProject'



const Project = ()=>{
    return(
        <>
            <section>
                {/* title */}
                <div className="">
                    <Title
                        title ="Project"
                        description="Showcasing my journey in IT through real-world projects. From web development to DevOps, each project reflects my passion for innovation and problem-solving."
                    />
                </div>
                {/* card */}
                <div className="">
                    <cardProject></cardProject>
                </div>
            </section>
        </>
    )
}
export default Project