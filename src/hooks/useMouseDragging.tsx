import React, { useCallback, useState } from "react";

export default (onDrag: (x: number, y: number) => void) => {
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown: React.MouseEventHandler = useCallback((e) => {
    if (e.button === 0) {
      setIsDragging(true);
    }
  }, []);

  const onMouseMove: React.MouseEventHandler = useCallback((e) => {
    if (isDragging) {
      onDrag(e.clientX, e.clientY);
    }
  }, []);

  const onMouseUp: React.MouseEventHandler = useCallback(() => {
    setIsDragging(false);
  }, []);

  return [{ onMouseDown, onMouseMove, onMouseUp }];
};
