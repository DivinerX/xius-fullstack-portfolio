import type { Metadata, ResolvingMetadata } from 'next'

import Mdx from '@/components/mdx'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import getPage from '@/utils/get-page'

// export const runtime = 'edge'
const title = 'Uses'
const description =
  'These are the tools I currently use for developement and every day.'

/**
 * The props of {@link UsesPage}.
 */
type UsesPageProps = {
  /**
   * The params of the URL.
   */
  params: Record<string, never>
  /**
   * The search params of the URL.
   */
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: UsesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/uses`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/uses`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const UsesPage = () => {
  const page = getPage('uses')

  return (
    <>
      <PageTitle
        title='Uses'
        description='These are the tools I currently use for developement and every day.'
      />
      <Mdx code={page.body.code} />
    </>
  )
}

export default UsesPage
