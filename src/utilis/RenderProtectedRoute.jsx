import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const RenderProtectedRoute = ({condition,renderPage,fallback,errorMessage,devMode = true}) => {

    if (devMode) {
    return <div>{renderPage}</div>;
  }

  // Check authentication first
  if (!condition) {
    toast.error(errorMessage);
    return <Navigate to={fallback} replace />;
  }

  // All conditions met, render the page
  return <div>{renderPage}</div>;
};

export default RenderProtectedRoute;