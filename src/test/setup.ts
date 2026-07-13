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
  // @ts-expect-error test shim
  globalThis.IntersectionObserver = IOStub;
}
