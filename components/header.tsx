import Link from 'next/link'
import  ThemeToggle  from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            DF
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          {/* <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li> */}
          <li className='transition-colors hover:text-foreground'>
            <Link target='_blank' href='https://docs.google.com/document/d/e/2PACX-1vS7bDuUzqqYmph0e5-rb4f9cYFKXl1Uh4VkiG1h52aLluafmUtGMj7oV74bvmFhJGZMKb2W4ZWE7bzI/pub'>Resume</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}