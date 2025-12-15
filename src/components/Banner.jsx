import { useAuth } from "../context/AuthContext";

export default function Banner({ title, subtitle }) {
    const { user } = useAuth();
    return (
    <div className="hero-section position-relative">
      <div className="container-fluid px-4">
        <h1>{title}, {user?.username}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}