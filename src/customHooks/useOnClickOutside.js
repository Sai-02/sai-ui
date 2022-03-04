import { useEffect } from "react";
export const useOnClickOutside = (ref, handler, closeOnFocusRemove) => {
  useEffect(() => {
    const listener = (event) => {
      if (!closeOnFocusRemove) return;
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      try {
        handler(event);
      } catch (e) {
        throw new Error("You have to pass a function to onClick prop");
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
