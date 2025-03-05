// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">হোম</Link> |  
      <Link href="/about">আমাদের সম্পর্কে</Link>
    </nav>
  );
}