
import { FormContainer } from "./AuthForm"


function SignUpPage() {
    return (
        // Setting Netflix Background hero Img
        <section className="relative h-full w-auto bg-[url('/images/hero.jpg')]
            bg-no-repeat bg-center bg-fixed bg-cover">
            {/* Decrease bg opacity for large screen and opaque for small ones */}
            <div className='bg-black w-full h-full md:bg-opacity-50 scroll-smooth overflow-y-scroll'>
                {/* Netflix Logo */}
                <nav className='px-12 py-6 md:py-9'>
                    <img src='/images/logo.png' alt='Logo' className='h-6 md:h-9 lg:h-12 ' />
                </nav>
                <FormContainer />
            </div>
        </section>
    )
}


export default SignUpPage