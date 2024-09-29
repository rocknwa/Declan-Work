import { useState } from 'react';

const BookmarkIcon = ({ filled, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

function BookmarkButton({jobId, className}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

    const  handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        //TODO: Add the bookmark to the database
    }

  return (
    <button
      onClick={handleBookmark}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center focus:outline-none transition-colors duration-200"
    >
    <BookmarkIcon filled={isBookmarked} className={`w-5 h-5 ${className}`} />
    </button>
  )
}

export default BookmarkButton