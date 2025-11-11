import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I am</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> M. Johan</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Arifin</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Passionate Fullstack Developer with proven experience in designing and building responsive
                        user interfaces using HTML, CSS, JavaScript, and React.js. Skilled in developing server-side
                        logic with PHP and Laravel 11, as well as optimizing application performance, diagnosing
                        bugs, and maintaining application stability. Experienced in collaborating within crossfunctional teams using SCRUM and Agile methodologies to deliver innovative web solutions.
                        Adept at applying UI/UX best practices to enhance user interaction and creating scalable,
                        maintainable applications. Committed to continuous learning and ready to start new
                        challenges in dynamic environments while leveraging strong collaboration and communication
                        skills.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}
