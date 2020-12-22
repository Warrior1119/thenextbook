import React from "react";
import classNames from "classnames";
import { Waypoint } from "react-waypoint";

import styles from "./Table.module.scss";
import Spinner from "../Spinner";

interface TableProps {
  instance: any;
  paginationType?: "INDEX" | "CURSOR";
  hasMore?: boolean;
  loading?: boolean;
  onFetchMore?();
  onClickRow?(data: any);
}

const Table: React.FunctionComponent<TableProps> = ({
  instance: {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
  },
  loading,
  paginationType,
  hasMore,
  onFetchMore,
  onClickRow,
}) => {
  return (
    <div className={styles.TableContainer}>
      <div {...getTableProps()} className={styles.Table}>
        <div className={styles.THead}>
          {headerGroups.map((headerGroup) => {
            const {
              key: rowKey,
              ...rowProps
            } = headerGroup.getHeaderGroupProps();

            return (
              <div className={styles.Tr} key={rowKey} {...rowProps}>
                {headerGroup.headers.map((column) => {
                  const {
                    key: cellKey,
                    ...cellProps
                  } = column.getHeaderProps();
                  return (
                    <div className={styles.Th} key={cellKey} {...cellProps}>
                      {column.render("Header")}
                      <div
                        {...column.getResizerProps()}
                        className={classNames(styles.Resizer, {
                          [styles.isResizing]: column.isResizing,
                        })}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {paginationType === "INDEX" && (
          <div className={styles.TBody} {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...rowProps } = row.getRowProps();

              return (
                <div className={styles.Tr} key={rowKey} {...rowProps}>
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...cellProps } = cell.getCellProps();
                    return (
                      <div className={styles.Td} key={cellKey} {...cellProps}>
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
        {paginationType === "CURSOR" && (
          <div className={styles.TBody} {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...rowProps } = row.getRowProps();

              return (
                <div
                  className={styles.Tr}
                  key={rowKey}
                  {...rowProps}
                  onClick={() => onClickRow && onClickRow(row.original)}
                >
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...cellProps } = cell.getCellProps();
                    return (
                      <div className={styles.Td} key={cellKey} {...cellProps}>
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {!loading && hasMore && (
              <Waypoint onEnter={onFetchMore} bottomOffset="-50%" />
            )}
            {loading && (
              <div className={styles.LoadingRow}>
                <Spinner size={50} />
              </div>
            )}
          </div>
        )}
        {!paginationType && (
          <div className={styles.TBody} {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...rowProps } = row.getRowProps();

              return (
                <div className={styles.Tr} key={rowKey} {...rowProps}>
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...cellProps } = cell.getCellProps();
                    return (
                      <div className={styles.Td} key={cellKey} {...cellProps}>
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {loading && (
              <div className={styles.LoadingRow}>
                <Spinner size={50} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
