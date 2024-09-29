import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pagination({ jobsPerPage, totalJobs, paginate, currentPage }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i)
  }

  const renderPageNumbers = () => {
    const totalPages = pageNumbers.length
    if (totalPages <= 5) {
      return pageNumbers.map((number) => (
        <Button
          key={number}
          variant={currentPage === number ? "default" : "outline"}
          onClick={() => paginate(number)}
          className="mx-1"
        >
          {number}
        </Button>
      ))
    }

    const items = []
    if (currentPage <= 3) {
      for (let i = 1; i <= 3; i++) {
        items.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            onClick={() => paginate(i)}
            className="mx-1"
          >
            {i}
          </Button>
        )
      }
      items.push(<span key="ellipsis1" className="mx-1">...</span>)
      items.push(
        <Button
          key={totalPages}
          variant="outline"
          onClick={() => paginate(totalPages)}
          className="mx-1"
        >
          {totalPages}
        </Button>
      )
    } else if (currentPage >= totalPages - 2) {
      items.push(
        <Button
          key={1}
          variant="outline"
          onClick={() => paginate(1)}
          className="mx-1"
        >
          1
        </Button>
      )
      items.push(<span key="ellipsis2" className="mx-1">...</span>)
      for (let i = totalPages - 2; i <= totalPages; i++) {
        items.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            onClick={() => paginate(i)}
            className="mx-1"
          >
            {i}
          </Button>
        )
      }
    } else {
      items.push(
        <Button key={1} variant="outline" onClick={() => paginate(1)} className="mx-1">
          1
        </Button>
      )
      items.push(<span key="ellipsis3" className="mx-1">...</span>)
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        items.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            onClick={() => paginate(i)}
            className="mx-1"
          >
            {i}
          </Button>
        )
      }
      items.push(<span key="ellipsis4" className="mx-1">...</span>)
      items.push(
        <Button
          key={totalPages}
          variant="outline"
          onClick={() => paginate(totalPages)}
          className="mx-1"
        >
          {totalPages}
        </Button>
      )
    }
    return items
  }

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>
      {renderPageNumbers()}
      <Button
        variant="outline"
        size="sm"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </nav>
  )
}