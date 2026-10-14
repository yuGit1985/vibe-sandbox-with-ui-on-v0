"use client";

import { useMemo, useState } from "react";

type Customer = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "アクティブ" | "休止中";
  lastContact: string;
  joined: string;
  location: string;
  notes: string[];
};

const initialCustomers: Customer[] = [
  {
    id: 1,
    name: "佐藤 美咲",
    company: "株式会社ノーススター",
    email: "misaki.sato@northstar.jp",
    phone: "03-4567-8901",
    status: "アクティブ",
    lastContact: "2024/06/18",
    joined: "2023/09/12",
    location: "東京都 渋谷区",
    notes: [
      "次回の定例会で新しいプランについて提案する。",
      "請求書の送付先を経理部に変更済み。",
    ],
  },
  {
    id: 2,
    name: "田中 恒一",
    company: "グローステック株式会社",
    email: "koichi.tanaka@growthtech.jp",
    phone: "06-1234-5678",
    status: "アクティブ",
    lastContact: "2024/06/14",
    joined: "2024/01/08",
    location: "大阪府 大阪市",
    notes: [
      "7月の展示会に参加予定。",
      "新機能のオンボーディング資料を共有済み。",
    ],
  },
  {
    id: 3,
    name: "鈴木 陽子",
    company: "株式会社アトラス",
    email: "yoko.suzuki@atlas.co.jp",
    phone: "052-9876-5432",
    status: "アクティブ",
    lastContact: "2024/06/11",
    joined: "2022/11/20",
    location: "愛知県 名古屋市",
    notes: ["契約更新の確認を6月末に行う。"],
  },
  {
    id: 4,
    name: "高橋 恒一",
    company: "ブルーリバー合同会社",
    email: "koichi.takahashi@blueriver.jp",
    phone: "045-1122-3344",
    status: "休止中",
    lastContact: "2024/05/28",
    joined: "2023/04/03",
    location: "神奈川県 横浜市",
    notes: ["社内体制変更のため、8月まで利用休止。"],
  },
  {
    id: 5,
    name: "伊藤 さやか",
    company: "株式会社オービット",
    email: "sayaka.ito@orbit.jp",
    phone: "092-3344-5566",
    status: "アクティブ",
    lastContact: "2024/05/24",
    joined: "2024/02/15",
    location: "福岡県 福岡市",
    notes: ["導入事例インタビューに協力いただける予定。"],
  },
];

export default function Home() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedId, setSelectedId] = useState(1);
  const [query, setQuery] = useState("");
  const [note, setNote] = useState("");
  const selected =
    customers.find((customer) => customer.id === selectedId) ?? customers[0];
  const filteredCustomers = useMemo(
    () =>
      customers.filter((customer) =>
        `${customer.name}${customer.company}`.includes(query),
      ),
    [customers, query],
  );

  function addNote() {
    if (!note.trim() || !selected) return;
    setCustomers((current) =>
      current.map((customer) =>
        customer.id === selected.id
          ? { ...customer, notes: [note.trim(), ...customer.notes] }
          : customer,
      ),
    );
    setNote("");
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
            <button
              type="button"
              className="primary-button"
              onClick={() => alert("顧客登録フォームは準備中です")}
            >
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
              <strong>
                {
                  customers.filter(
                    (customer) => customer.status === "アクティブ",
                  ).length
                }
              </strong>
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
              <div className="panel-heading">
                <div>
                  <h2>顧客一覧</h2>
                  <p>{filteredCustomers.length}件の顧客</p>
                </div>
                <div className="search-wrap">
                  <span>⌕</span>
                  <input
                    aria-label="顧客を検索"
                    placeholder="名前や会社名で検索"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </div>
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
                <div className="notes-section">
                  <div className="notes-heading">
                    <h3>メモ</h3>
                    <span>{selected.notes.length}</span>
                  </div>
                  <div className="note-form">
                    <textarea
                      aria-label="メモを入力"
                      placeholder="メモを追加..."
                      value={note}
                      onChange={(event) => setNote(event.target.value)}
                    />
                    <button
                      type="button"
                      className="add-note-button"
                      onClick={addNote}
                    >
                      追加
                    </button>
                  </div>
                  <div className="notes-list">
                    {selected.notes.map((item) => (
                      <article
                        className="note-card"
                        key={`${selected.id}-${item}`}
                      >
                        <p>{item}</p>
                        <small>
                          {item === selected.notes[0] ? "今日" : "2024/06/12"}
                        </small>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export const dynamic = "force-static";
