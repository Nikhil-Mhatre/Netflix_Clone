import Link from "next/link";

export default function Custom404() {
    return <>
        {/* Navbar */}
        <nav className="flex h-24 w-full items-center justify-around md:justify-around lg:justify-between lg:px-16">
        <img
            src="/images/logo.png"
            alt="Logo"
            className="h-6 md:h-9 lg:h-12 "
        />
        </nav>
        <div className="flex flex-col justify-start px-16 mt-32 items-start md:items-center gap-12 textw">
            <h1 className="text-5xl">
                Lost Your Way?
            </h1>
            <p className="text-xl">
                Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page
            </p>
            <button className="py-2 px-4 text-black bg-white rounded-lg hover:bg-gray-500 transition">
                Netflix Home
            </button>
        </div>
    </>
  }
