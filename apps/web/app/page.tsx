import AuthWrapper from "./components/AuthWrapper";

export default function Home() {
  return (
    <AuthWrapper>
      {/* This content won't be shown as users will be redirected */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p>Redirecting...</p>
      </div>
    </AuthWrapper>
  );
}
