import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import { Metadata } from 'next'


// export const metadata: Metadata = {
//   title: 'Dawood Faisal',
//   description: "Dawood Faisal is a Full Stack Software Engineer specializing in React, TypeScript, Node.js, Express, MongoDB, AI Engineering and RAG applications. View projects, experience and contact information."
// }

export default function Home() {


  return (
    <section className="py-24">
      <div className="container max-w-3xl ">
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