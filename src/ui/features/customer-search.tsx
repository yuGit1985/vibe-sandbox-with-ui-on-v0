"use client";

import type { ChangeEvent } from "react";

type CustomerSearchProps = {
  value: string;
  resultCount: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function CustomerSearch({
  value,
  resultCount,
  onChange,
}: CustomerSearchProps) {
  return (
    <div className="panel-heading">
      <div>
        <h2>顧客一覧</h2>
        <p>{resultCount}件の顧客</p>
      </div>
      <label className="search-wrap">
        <span aria-hidden="true">⌕</span>
        <span className="sr-only">顧客を検索</span>
        <input
          placeholder="名前や会社名で検索"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
