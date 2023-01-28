import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RouteGuard from "../components/auth/route-guard";
const PostDetailPage = React.lazy(() => import("../components/post/detail"));
const SignIn = React.lazy(() => import("../components/auth/singin"));
const HomePage = React.lazy(() => import("../components/home"));
const PostPage = React.lazy(() => import("../components/post"));

const CustomRoutes = () => {
  return (
    <Suspense fallback={<em>Loading...</em>}>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <HomePage />
            </RouteGuard>
          }
        />
        <Route
          path="/posts"
          element={
            <RouteGuard>
              <PostPage />
            </RouteGuard>
          }
        />
        <Route
          path="/posts/:slug"
          element={
            <RouteGuard>
              <PostDetailPage />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Suspense>
  );
};

export default CustomRoutes;
