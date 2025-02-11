import Button from "./ui/button";

export default function Hero() {
    return(
        <div>
            
            <section className="bg-contain bg-no-repeat  w-full h-[90vh]" style={{ backgroundImage: "url('/img/Scene.png')" }}>
                <nav className="px-[16vw] py-[10vh] flex ">
                    <img src="../../public/img/logo.png" alt="" />
                    <article>
                        <a href="">ABOUT</a>
                        <a href="">HOW TO</a>
                        <a href="">FAQS</a>
                        <Button></Button>
                    </article>
                </nav>
            </section>
            
            <section>
                <img src="../../public/img/mobel.png" alt="" className="relative object-contain  h-[34vh]" />
            </section>
        </div>


    )
}