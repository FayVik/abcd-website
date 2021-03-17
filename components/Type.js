export function Heading1({children}){
    return(
        <h1 className="text-5xl text-center mb-3 text-blue-700">
            {children}
        </h1>
    )
}
export function Heading2({children}){
    return(
        <h2 className="text-3xl text-center mb-3 text-blue-600">
            {children}
        </h2>
    )
}

export function Heading3({children}){
    return(
        <h3 className="text-2xl text-center mb-3 text-blue-400">
            {children}
        </h3>
    )
}

export function Paragraph({children}){
    return(
        <p className="text-justify">
            {children}
        </p>
    )
}