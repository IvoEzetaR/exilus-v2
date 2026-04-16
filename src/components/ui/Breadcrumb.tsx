import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mt-4">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span style={{ color: "rgba(245,235,220,0.35)" }} aria-hidden="true">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-opacity hover:opacity-100"
                  style={{ color: "rgba(245,235,220,0.55)" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{
                    color: isLast ? "rgba(245,235,220,0.9)" : "rgba(245,235,220,0.55)",
                  }}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
