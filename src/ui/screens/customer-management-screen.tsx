"use client";

import { useMemo, useState } from "react";
import type { Customer } from "@/ports/customer";
import { CustomerNotes } from "@/ui/features/customer-notes";
import { CustomerSearch } from "@/ui/features/customer-search";
import {
  addCustomerNote,
  countActiveCustomers,
  searchCustomers,
} from "@/usecases/customer-management";

type CustomerManagementScreenProps = { initialCustomers: Customer[] };

export function CustomerManagementScreen({
  initialCustomers,
}: CustomerManagementScreenProps) {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedId, setSelectedId] = useState(initialCustomers[0]?.id);
  const [query, setQuery] = useState("");
  const selected =
    customers.find((customer) => customer.id === selectedId) ?? customers[0];
  const filteredCustomers = useMemo(
    () => searchCustomers(customers, query),
    [customers, query],
  );

  function handleAddNote(body: string) {
    if (!selected) return;
    setCustomers((current) => addCustomerNote(current, selected.id, body));
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">C</span>
          <span>Clientory</span>
        </div>
        <div className="topbar-right">
          <span className="topbar-date">2024年6月20日</span>
          <button type="button" className="icon-button" aria-label="通知">
            ◌
          </button>
          <div className="user-avatar">Y</div>
          <span className="user-name">山田 太郎</span>
          <span className="chevron">⌄</span>
        </div>
      </header>
      <div className="workspace">
        <aside className="sidebar">
          <nav className="nav-list" aria-label="メインナビゲーション">
            <a className="nav-item" href="#overview">
              <span className="nav-icon">▦</span>概要
            </a>
            <a className="nav-item active" href="#customers">
              <span className="nav-icon">♙</span>顧客
            </a>
            <a className="nav-item" href="#tasks">
              <span className="nav-icon">✓</span>タスク
              <span className="nav-badge">4</span>
            </a>
            <a className="nav-item" href="#reports">
              <span className="nav-icon">▥</span>レポート
            </a>
          </nav>
          <div className="sidebar-bottom">
            <a className="nav-item" href="#settings">
              <span className="nav-icon">⚙</span>設定
            </a>
            <p className="version">Clientory v1.0.0</p>
          </div>
        </aside>
        <section className="content" id="customers">
          <div className="page-heading">
            <div>
              <p className="eyebrow">CUSTOMER MANAGEMENT</p>
              <h1>顧客</h1>
              <p className="subtitle">
                顧客情報を一元管理し、関係を深めましょう。
              </p>
            </div>
            <button type="button" className="primary-button">
              ＋ 新しい顧客
            </button>
          </div>
          <div className="summary-row">
            <div className="summary-card">
              <span className="summary-label">総顧客数</span>
              <strong>{customers.length}</strong>
              <span className="summary-trend">
                ↗ 12% <em>前月比</em>
              </span>
            </div>
            <div className="summary-card">
              <span className="summary-label">アクティブ</span>
              <strong>{countActiveCustomers(customers)}</strong>
              <span className="summary-dot">● 良好な状態</span>
            </div>
            <div className="summary-card">
              <span className="summary-label">今月の新規</span>
              <strong>3</strong>
              <span className="summary-trend">
                ↗ 8% <em>前月比</em>
              </span>
            </div>
          </div>
          <div className="customer-layout">
            <section className="list-panel">
              <CustomerSearch
                value={query}
                resultCount={filteredCustomers.length}
                onChange={(event) => setQuery(event.target.value)}
              />
              <div className="customer-list">
                {filteredCustomers.map((customer) => (
                  <button
                    type="button"
                    className={`customer-row ${selected?.id === customer.id ? "selected" : ""}`}
                    key={customer.id}
                    onClick={() => setSelectedId(customer.id)}
                  >
                    <div className="customer-avatar">
                      {customer.name.slice(0, 1)}
                    </div>
                    <div className="customer-main">
                      <strong>{customer.name}</strong>
                      <span>{customer.company}</span>
                    </div>
                    <div className="customer-meta">
                      <span
                        className={`status ${customer.status === "アクティブ" ? "active-status" : "paused-status"}`}
                      >
                        {customer.status}
                      </span>
                      <small>{customer.lastContact}</small>
                    </div>
                    <span className="row-arrow">›</span>
                  </button>
                ))}
              </div>
            </section>
            {selected && (
              <aside className="detail-panel">
                <div className="detail-header">
                  <div>
                    <p className="eyebrow">CUSTOMER PROFILE</p>
                    <h2>顧客詳細</h2>
                  </div>
                  <button
                    type="button"
                    className="more-button"
                    aria-label="その他の操作"
                  >
                    •••
                  </button>
                </div>
                <div className="profile">
                  <div className="profile-avatar">
                    {selected.name.slice(0, 1)}
                  </div>
                  <h3>{selected.name}</h3>
                  <p>{selected.company}</p>
                  <span
                    className={`status ${selected.status === "アクティブ" ? "active-status" : "paused-status"}`}
                  >
                    {selected.status}
                  </span>
                </div>
                <div className="contact-list">
                  <div>
                    <span className="contact-icon">✉</span>
                    <div>
                      <small>メールアドレス</small>
                      <a href={`mailto:${selected.email}`}>{selected.email}</a>
                    </div>
                  </div>
                  <div>
                    <span className="contact-icon">⌕</span>
                    <div>
                      <small>電話番号</small>
                      <a href={`tel:${selected.phone}`}>{selected.phone}</a>
                    </div>
                  </div>
                  <div>
                    <span className="contact-icon">⌖</span>
                    <div>
                      <small>所在地</small>
                      <p>{selected.location}</p>
                    </div>
                  </div>
                  <div>
                    <span className="contact-icon">▣</span>
                    <div>
                      <small>登録日</small>
                      <p>{selected.joined}</p>
                    </div>
                  </div>
                </div>
                <CustomerNotes customer={selected} onAdd={handleAddNote} />
              </aside>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
