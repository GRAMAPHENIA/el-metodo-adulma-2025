// components/ShareMenu.tsx
import Link from "next/link";

interface ShareMenuProps {
  options: { name: string; url: string }[];
  onOptionSelect: () => void;
}

export function ShareMenu({ options, onOptionSelect }: ShareMenuProps) {
  return (
    <div className="absolute bottom-full mb-2  right-0 mt-2 w-40 bg-primary-foreground dark:bg-secondary border border-primary rounded shadow-lg">
      <ul className="p-2">
        {options.map((option) => (
          <li key={option.name}>
            <Link
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 hover:bg-secondary dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300 rounded-lg"
              onClick={onOptionSelect}
            >
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
