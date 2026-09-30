import type { Metadata } from 'next'
import { PageIntro, TextLink } from '@/components/lumii/primitives'

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Lumii' },
}

export default function NotFound() {
  return (
    <div className="lumii">
      <PageIntro
        label="PAGE NOT FOUND"
        title={
          <>
            Let’s find your
            <br />
            next useful step.
          </>
        }
        lead="This page isn’t available here. Explore Lumii’s courses, resources or ways to work together."
      />
      <section className="section">
        <TextLink href="/" className="button">
          Back to Lumii
        </TextLink>
      </section>
    </div>
  )
}
