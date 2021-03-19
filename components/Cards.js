// Friday: let's make the BlogCard more responsive for small screens
// https://tailwindcss.com/docs/responsive-design

export function BlogCard({ children }) {
  return (
    <div className="flex-1 w-3/6 text-justify px-8 py-4 mx-4 mb-4 border shadow-lg w-full rounded-lg bg-gray-100">
      <p>{children}</p>
    </div>
  );
}

export function AnotherCard({ children }) {
  return (
    <div className="flex-1 lg:w-3/6 lg:h-auto sm:py-28 pt-28 pb-14 text-justify px-4 mb-5 sm:w-full xs:w-full">
      {children}
    </div>
  );
}
