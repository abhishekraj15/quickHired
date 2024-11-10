import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    // Clear search params after navigating
    if (isLoaded && isSignedIn) {
      setSearch({});
    }
  }, [isLoaded, isSignedIn, setSearch]);

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  if (
    user !== undefined &&
    !user?.unsafeMetadata?.role &&
    pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" />;
  }
  return children;
};

export default ProtectedRoute;
