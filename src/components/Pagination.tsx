import { useMemo, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/* eslint-disable no-unused-vars */
type PaginationProps = {
  totalPages: number;
  currentPage?: number;
  onPageChange?: (pageNumber: number) => void;
  position?: keyof typeof PaginationPosition;
};

enum PaginationPosition {
  center = "justify-center",
  left = "justify-start",
  right = "justify-end",
}

/* eslint-enable no-unused-vars */

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const Pagination = ({
  totalPages,
  currentPage = 1,
  onPageChange = () => {},
  position = "center",
}: PaginationProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(currentPage);

  const paginationRange = useMemo(() => {
    const boundaryCount = 1;
    const siblingCount = 1;
    const startPages = range(1, Math.min(boundaryCount, totalPages));
    const endPages = range(
      Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
      totalPages
    );

    const siblingsStart = Math.max(
      Math.min(
        // Natural start
        selectedPage - siblingCount,
        // Lower boundary when page is high
        totalPages - boundaryCount - siblingCount * 2 - 1
      ),
      // Greater than startPages
      boundaryCount + 2
    );

    const siblingsEnd = Math.min(
      Math.max(
        // Natural end
        selectedPage + siblingCount,
        // Upper boundary when page is low
        boundaryCount + siblingCount * 2 + 2
      ),
      // Less than endPages
      endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
    );

    const pages = [
      ...startPages,
      ...(siblingsStart > boundaryCount + 2
        ? ["start-ellipsis"]
        : boundaryCount + 1 < totalPages - boundaryCount
        ? [boundaryCount + 1]
        : []),
      ...range(siblingsStart, siblingsEnd),
      ...(siblingsEnd < totalPages - boundaryCount - 1
        ? ["end-ellipsis"]
        : totalPages - boundaryCount > boundaryCount
        ? [totalPages - boundaryCount]
        : []),
      ...endPages,
    ];

    return pages;
  }, [totalPages, selectedPage]);

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  const onPrevPage = () => {
    if (selectedPage > 1) {
      setSelectedPage(selectedPage - 1);
      onPageChange(selectedPage - 1);
    }
  };

  const onNextPage = () => {
    if (selectedPage < totalPages) {
      setSelectedPage(selectedPage + 1);
      onPageChange(selectedPage + 1);
    }
  };

  return (
    <div
      className={`flex items-center mt-4 space-x-2 ${PaginationPosition[position]}`}
    >
      <button
        className="h-7 w-7 flex items-center justify-center text-lg disabled:text-mediumGray"
        onClick={onPrevPage}
        disabled={selectedPage === 1}
      >
        <AiOutlineLeft />
      </button>
      {paginationRange?.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${
            pageNumber === selectedPage && "bg-mediumGray"
          } h-7 w-7 px-2 py-1 rounded-lg focus:outline-none flex items-center justify-center`}
          onClick={() => {
            if (typeof pageNumber === "number" && pageNumber !== selectedPage) {
              handlePageChange(pageNumber);
            }
          }}
        >
          {pageNumber === "start-ellipsis" || pageNumber === "end-ellipsis" ? (
            <span className="text-sm">...</span>
          ) : (
            pageNumber
          )}
        </button>
      ))}
      <button
        className="h-7 w-7 flex items-center justify-center text-lg disabled:text-mediumGray"
        onClick={onNextPage}
        disabled={selectedPage === totalPages}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
