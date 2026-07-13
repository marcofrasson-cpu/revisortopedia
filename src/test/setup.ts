import "@testing-library/jest-dom/vitest";

// jsdom lacks IntersectionObserver (used by TopicView scroll-spy) — stub it.
class IOStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = "";
  thresholds = [];
}
if (!("IntersectionObserver" in globalThis)) {
  globalThis.IntersectionObserver = IOStub as unknown as typeof IntersectionObserver;
}
