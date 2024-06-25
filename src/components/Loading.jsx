// Loader
export default function Loading() {
  return (
    
<div role="status" className="max-w-full animate-pulse">
    <div className="h-[10vh] bg-gray-200  dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-[10vh] bg-gray-200  dark:bg-gray-700 max-w-[90%] mb-2.5"></div>
    <div className="h-[10vh] bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
    <div className="h-[10vh] bg-gray-200  dark:bg-gray-700 max-w-[90%] mb-2.5"></div>
    <div className="h-[10vh] bg-gray-200  dark:bg-gray-700 max-w-[90%] mb-2.5"></div>
    <div className="h-[10vh] bg-gray-200  dark:bg-gray-700 max-w-[90%]"></div>
    <span className="sr-only">Loading...</span>
</div>


  )
}
