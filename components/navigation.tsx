import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MonPortfolio</Link>
                <div className="space-x-1">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/">Accueil</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/about">À propos</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/projects">Projets</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

