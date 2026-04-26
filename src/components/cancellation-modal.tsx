"use client";

import { useEffect, useId, useState } from "react";

const REASONS = [
  { id: "too-expensive", label: "It's too expensive" },
  { id: "not-using-enough", label: "I'm not using it enough" },
  { id: "missing-features", label: "It's missing features I need" },
  { id: "found-alternative", label: "I found a better alternative" },
  { id: "technical-issues", label: "I ran into bugs or technical issues" },
  { id: "hard-to-use", label: "It's hard to use" },
];

export type CancellationFeedback = {
  reasons: string[];
  otherReason: string;
  comment: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: (feedback: CancellationFeedback) => void | Promise<void>;
  submitting?: boolean;
};

export default function CancellationModal({
  open,
  onClose,
  onConfirm,
  submitting = false,
}: Props) {
  if (!open) return null;
  return (
    <CancellationModalContent
      onClose={onClose}
      onConfirm={onConfirm}
      submitting={submitting}
    />
  );
}

function CancellationModalContent({
  onClose,
  onConfirm,
  submitting,
}: Omit<Props, "open"> & { submitting: boolean }) {
  const titleId = useId();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [otherReason, setOtherReason] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, submitting]);

  const otherSelected = selected.has("other");
  const canConfirm =
    !submitting && (selected.size > 0 || comment.trim().length > 0);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canConfirm) return;
    onConfirm({
      reasons: Array.from(selected),
      otherReason: otherSelected ? otherReason.trim() : "",
      comment: comment.trim(),
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={() => {
        if (!submitting) onClose();
      }}
    >
      <div
        className="flex max-h-[92vh] w-full flex-col rounded-t-2xl bg-white shadow-xl sm:max-w-lg sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 pt-6 sm:px-8 sm:pt-8">
          <div>
            <h2
              id={titleId}
              className="text-xl font-semibold text-gray-900 sm:text-2xl"
            >
              We hate to see you go!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Help us understand what we can do better for our clients. Share
              why you are leaving:
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            aria-label="Close"
            className="-mr-2 -mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col overflow-y-auto px-6 pb-6 pt-4 sm:px-8 sm:pb-8"
        >
          <div className="space-y-2">
            {REASONS.map((r) => (
              <label
                key={r.id}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={selected.has(r.id)}
                  onChange={() => toggle(r.id)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-800">{r.label}</span>
              </label>
            ))}
            <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50">
              <input
                type="checkbox"
                checked={otherSelected}
                onChange={() => toggle("other")}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-800">Other</span>
            </label>
            {otherSelected && (
              <input
                type="text"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                placeholder="Tell me what's going on…"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor={`${titleId}-comment`}
              className="block text-sm font-medium text-gray-800"
            >
              Want to add anything else?
            </label>
            <textarea
              id={`${titleId}-comment`}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder="Optional — I read every response."
              className="mt-2 block w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
            >
              Never mind, keep my subscription
            </button>
            <button
              type="submit"
              disabled={!canConfirm}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Cancelling…" : "Confirm cancellation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
