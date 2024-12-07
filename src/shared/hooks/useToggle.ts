import { toggleAtom } from "@/shared/atoms";
import { useAtom } from "jotai";
import { useCallback } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useAtom(toggleAtom);

  const onToggle = useCallback((cb?: () => void, b?: boolean) => {
    if (b === undefined) {
      cb?.();
      setToggle((prev) => !prev);
    } else {
      setToggle(b);
    }
  }, []);

  const onTurnOn = useCallback((cb?: () => void) => {
    setToggle(true);
    cb?.();
  }, []);

  const onTurnOff = useCallback((cb?: () => void) => {
    setToggle(false);
    cb?.();
  }, []);

  return { toggle, onToggle, onTurnOff, onTurnOn };
};
