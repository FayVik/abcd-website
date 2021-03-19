export function Heading1({ children }) {
  return (
    <h1 className="mb-3 md:text-4xl sm:text-4xl 2xl:text-2xl lg:text-5xl text-3xl text-black-600">
      {children}
    </h1>
  );
}
export function Heading2({ children }) {
  return <h2 className="text-center text-4xl pt-12 text-black">{children}</h2>;
}

export function Heading3({ children }) {
  return (
    <h3 className="text-2xl text-justify mb-3 text-blue-400">{children}</h3>
  );
}

export function Paragraph({ children }) {
  return <p className="text-justify">{children}</p>;
}
