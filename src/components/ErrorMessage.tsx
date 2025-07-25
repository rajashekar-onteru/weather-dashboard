import React from "react";
import "./ErrorMessage.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return <div className="error-box">{message}</div>;
};

export default ErrorMessage;
