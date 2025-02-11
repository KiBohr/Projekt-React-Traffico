import Button from "./ui/button";
import ButtonContact from "./ui/button-contact";

export default function Hero() {
    return(
        <div className="">
            
            <section className="px-44 bg-contain bg-no-repeat -mb-40 w-full h-screen" style={{ backgroundImage: "url('/img/Scene.png')" }}>
                <nav className="py-10 flex items-center justify-between gap-44 mb-10">
                    <img src="../../public/img/logo.png" alt="" />
                    <article className="flex items-center gap-[4vw] font-bold text-sm text-white mr-[8vw] ">
                        <a href="">ABOUT</a>
                        <a href="">HOW TO</a>
                        <a href="">FAQS</a>
                        <ButtonContact></ButtonContact>
                        
                    </article>
                </nav>
                <article className="text-white text-7xl">
                    <p>Your awesome</p>
                    <p>traffic permit</p>
                    <p>consultant.</p>
                <Button></Button>
                </article>
            <section className="mb-10">
                <img src="../../public/img/mobel.png" alt="" className="relative top-48 right-44 object-contain  h-[36vh]" />
            </section>
            </section>

        </div>


    )
}