import React, { FC } from "react";
import Spinner from "./Spinner";

type TableProps<T> = {
  headers: Column[];
  data: T[];
  onSelectedRowsChange?: (selectedRowsKeys: (string | number)[]) => void;
  loading?: boolean;
};

type Column = {
  title: React.JSX.Element | string;
  dataIndex: string;
  key: string | number;
  render?: (value: any) => React.JSX.Element | React.ReactNode;
};

type DataRow = {
  key: any;
  [key: string]: any;
};

const Table: FC<TableProps<DataRow>> = ({ headers, data, loading = false }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="border-b border-mediumGray">
          {headers.map((header) => (
            <th
              className="text-sm text-left text-darkGray font-semibold px-4 py-2 border-r border-mediumGray last:border-none"
              key={header.key}
            >
              {header.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td className=" h-14 relative" colSpan={6}>
              <Spinner />
            </td>
          </tr>
        ) : (
          data.map((row) => (
            <tr key={`row-${row.key}`} className="border-b border-mediumGray">
              {headers.map((header) => {
                const rowValue = row[header.dataIndex];

                return (
                  <td
                    key={`${row.key}-${header.key}`}
                    className="text-left text-xs text-black leading-[18px] px-4 py-2"
                  >
                    {header.render && typeof rowValue !== "object"
                      ? header.render(rowValue)
                      : rowValue}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
