import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void; // create as base/empty function so it can be used in 'AppContext' -> setToast()
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const style = type === "SUCCESS" ? "bg-green-600" : "bg-red-600";

  return (
    <div
      className={`fixed right-4 top-4 z-50 max-w-md rounded-md p-4 text-blue-100 ${style}`}
    >
      <div className="flex items-center justify-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
