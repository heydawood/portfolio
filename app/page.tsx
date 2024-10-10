import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {


  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro/>
        <RecentPosts/>
        <RecentProjects/>
        <NewsletterForm/>
      </div>
    </section>
  )
}

// interface Props {
//   mdxSource: MDXRemoteSerializeResult
// }
 
// export default function RemoteMdxPage({ mdxSource }: Props) {
//   return <MDXRemote {...mdxSource} />
// }