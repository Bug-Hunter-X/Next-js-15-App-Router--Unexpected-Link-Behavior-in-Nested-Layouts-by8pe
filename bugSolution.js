```javascript
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function MyComponent() {
  const router = useRouter();
  const [searchParams] = useSearchParams();

  const handleLinkClick = (href) => {
    router.push(href, { scroll: false });
  };

  return (
    <div>
      <a href="/" onClick={() => handleLinkClick('/')}>
        Home
      </a>
      <a href="/about" onClick={() => handleLinkClick('/about')}>
        About
      </a>
    </div>
  );
}

export default MyComponent; 
```