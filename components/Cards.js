// Friday: let's make the BlogCard more responsive for small screens
// https://tailwindcss.com/docs/responsive-design

export function BlogCard({children}) {
    return(
        <div className="flex-1 w-3/6 text-justify px-8 py-4 mx-4 mb-4 border shadow-lg w-full rounded-lg bg-gray-100">
            <p>{children}</p>
        </div>
    )
}

export function AnotherCard() {
    return(
        <div>
            <p>This is the other card</p>
        </div>
    )
}