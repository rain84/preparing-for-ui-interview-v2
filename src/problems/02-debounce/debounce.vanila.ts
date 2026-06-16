// bun test src/problems/02-debounce/test/debounce.test.ts

export function debounce<T extends (...args: any[]) => any>(
  cb: T,
  delay: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timerID: ReturnType<typeof setTimeout> | null = null
  return function (this: unknown, ...args: Parameters<T>): Promise<ReturnType<T>> {
    if (timerID) clearTimeout(timerID)

    return new Promise((resolve) => {
      timerID = setTimeout(() => {
        if (timerID) clearTimeout(timerID)
        const res = cb.apply(this, args)
        resolve(res)
      }, delay)
    })
  }
}

// --- Examples ---
// Uncomment to test your implementation:

// const log = debounce((msg: string) => console.log(msg), 300)
// log('a')  // cancelled by next call
// log('b')  // cancelled by next call
// log('c')  // only this one fires after 300ms → "c"
