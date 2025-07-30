import Title from './Button/Title'
import CardProject from './cardProject'

const cardData = [
    {
        title: "Hospital Website",
        type: "Website"
    },
    {
        title: "Digital Marketing",
        type: "Landing Page"
    },
    {
        title: "Hospital Website",
        type: "Front-end Website"
    }
]

const Project = () => {
    return (
        <section className="py-10 px-4">
            {/* Title */}
            <div className="mb-8">
                <Title
                    title="Project"
                    description="Showcasing my journey in IT through real-world projects. From web development to DevOps, each project reflects my passion for innovation and problem-solving."
                />
            </div>

            {/* Cards */}
            <div className="flex flex-wrap gap-6 justify-center">
                {
                    cardData.map((item, index) => (
                        <CardProject
                            key={index}
                            title={item.title}
                            description={item.type}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Project
