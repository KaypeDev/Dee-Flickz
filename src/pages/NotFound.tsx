export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-[45px] font-bold mb-2">404</h1>
      <p className="text-[20px] mb-4">Page not found</p>
      <a href="/" className="underline">
        Home Page
      </a>
    </div>
  );
}