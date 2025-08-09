import React, { useState } from "react";

interface TableColumn {
  label: string;
  key: string;
  align?: "left" | "center" | "right";
  width?: string;
  render?: (row: TableRow) => React.ReactNode; // custom cell template
}

interface TableRow {
  id: string | number;
  [key: string]: any;
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  onRemoveRow?: (id: string | number) => void;
  onEditRow?: (id: string | number) => void;
  onRowClick?: (id: string | number) => void;
  rowsPerPage?: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  onRemoveRow,
  onEditRow,
  onRowClick,
  rowsPerPage = 5
}) => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const isEmpty = !rows || rows.length === 0;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const toggleSelectAll = () => {
    if (selectedRows.length === paginatedRows.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedRows.map((row) => row.id));
    }
  };

  const toggleSelectRow = (id: string | number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleRowClick = (id: string | number) => {
    onRowClick?.(id);
  };

  return (
    <div className="overflow-x-auto w-full !text-[14px] scroll-bar rounded">
      <table className="w-full border-collapse table-auto !text-[14px] rounded">
        {/* Table Header */}
        <thead>
          <tr className="bg-[#E6E6E6]">
            {/* Select All */}
            <th className="px-2 py-1 text-center w-[40px]">
              <input
                type="checkbox"
                checked={selectedRows.length === paginatedRows.length && paginatedRows.length > 0}
                onChange={toggleSelectAll}
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-2 py-1 text-${column.align || "left"} min-w-[100px] whitespace-nowrap`}
                style={{ width: column.width || "auto" }}
              >
                {column.label}
              </th>
            ))}
            {(onRemoveRow || onEditRow) && (
              <th className="border px-2 py-1 text-center whitespace-nowrap">Actions</th>
            )}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {isEmpty ? (
            <tr>
              <td
                colSpan={columns.length + (onRemoveRow || onEditRow ? 2 : 1)}
                className="text-center py-10"
              >
                <img
                  src="/assets/common/nodata.jpg"
                  alt="No Data"
                  className="mx-auto h-[300px]"
                />
                <p>No Table Data Found</p>
              </td>
            </tr>
          ) : (
            paginatedRows.map((row, index) => (
              <tr
                key={row.id || index}
                className="border-b hover:bg-gray-50 border-[#DDDDDD] cursor-pointer"
                onClick={() => handleRowClick(row.id)}
              >
                {/* Single Select */}
                <td className="px-2 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleSelectRow(row.id)}
                  />
                </td>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-2 py-3 text-${column.align || "left"} whitespace-nowrap`}
                    style={{ width: column.width || "auto" }}
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
                {(onRemoveRow || onEditRow) && (
                  <td className="border px-2 py-1 text-center">
                    <div className="flex gap-2 justify-center">
                      {onEditRow && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onEditRow(row.id);
                          }}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <i className="pi pi-pencil"></i>
                        </button>
                      )}
                      {onRemoveRow && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveRow(row.id);
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <i className="pi pi-trash"></i>
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {!isEmpty && (
        <div className="flex justify-between items-center mt-3 text-sm">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
