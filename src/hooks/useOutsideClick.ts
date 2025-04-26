import { createRef, useEffect } from "react";

export function useOutsideClick(props: { onOutsideClick: () => void }) {
  const containerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        e.target &&
        !containerRef.current?.contains(e.target as HTMLElement)
      ) {
        props?.onOutsideClick();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);
  return {
    containerRef,
  };
}
