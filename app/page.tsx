import { Navigation } from '@/components/navigation'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Navigation />
        <main className="container mx-auto px-6 pt-24 pb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <Image
                src="/images/romain.jpg"
                alt="Romain Guiffroy"
                fill
                className="rounded-full object-cover border-4 border-primary"
            />
          </div>
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Romain Guiffroy
          </h1>
          <h2 className="text-3xl font-semibold mb-6">
            Développeur Web Passionné
          </h2>
          <p className="text-xl mb-8 max-w-2xl">
            Je suis un développeur créatif spécialisé dans la création d&#39;expériences web incroyables.
            Explorez mon travail et découvrez comment je peux donner vie à vos idées.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/projects">Voir mes projets</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
        </main>
      </div>
  )
}

