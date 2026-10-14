"use client";

import { useState } from "react";
import type { Customer } from "@/ports/customer";

type CustomerNotesProps = {
  customer: Customer;
  onAdd: (body: string) => void;
};

export function CustomerNotes({ customer, onAdd }: CustomerNotesProps) {
  const [body, setBody] = useState("");

  function handleSubmit() {
    if (!body.trim()) return;
    onAdd(body);
    setBody("");
  }

  return (
    <div className="notes-section">
      <div className="notes-heading">
        <h3>メモ</h3>
        <span>{customer.notes.length}</span>
      </div>
      <div className="note-form">
        <label className="sr-only" htmlFor="customer-note">
          メモを入力
        </label>
        <textarea
          id="customer-note"
          placeholder="メモを追加..."
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button
          type="button"
          className="add-note-button"
          onClick={handleSubmit}
        >
          追加
        </button>
      </div>
      <div className="notes-list">
        {customer.notes.map((note) => (
          <article className="note-card" key={note.id}>
            <p>{note.body}</p>
            <small>{note.createdAt}</small>
          </article>
        ))}
      </div>
    </div>
  );
}
