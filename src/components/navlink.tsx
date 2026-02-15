import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  exact?: boolean;
}

function NavLink({
  to,
  children,
  className = "",
  activeClassName = "",
  inactiveClassName = "",
  exact = false,
}: NavLinkProps) {
  return (
    <Link
      activeOptions={{
        exact,
      }}
      activeProps={{
        className: cn(className, activeClassName),
        "aria-current": "page",
      }}
      className={className}
      inactiveProps={{
        className: cn(className, inactiveClassName),
      }}
      to={to}
    >
      {({ isActive }) => (
        <span className={isActive ? activeClassName : inactiveClassName}>
          {children}
        </span>
      )}
    </Link>
  );
}

export { NavLink };
