import React from "react";

interface TableColumn {
  label: string;
  key: string;
  align?: "left" | "center" | "right";
  width?: string;
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
}

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  onRemoveRow,
  onEditRow,
  onRowClick,
}) => {
  const handleRowClick = (id: string | number) => {
    onRowClick?.(id);
  };

  const isEmpty = !rows || rows.length === 0;

  return (
    <div className="overflow-x-auto w-full !text-[14px] scroll-bar rounded">
      <table className="w-full border-collapse table-auto !text-[14px] rounded">
        {/* Table Header */}
        <thead>
          <tr className="bg-[#E6E6E6]">
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
                colSpan={columns.length + (onRemoveRow || onEditRow ? 1 : 0)}
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
            rows.map((row, index) => (
              <tr
                key={row.id || index}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(row.id)}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`border px-2 py-1 text-${column.align || "left"} whitespace-nowrap`}
                    style={{ width: column.width || "auto" }}
                  >
                    {row[column.key]}
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
    </div>
  );
};

export default Table;
