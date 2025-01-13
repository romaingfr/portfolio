import { Navigation } from '@/components/navigation'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
    {
        id: 1,
        title: "Application pour Auchan",
        description: "Développement et modernisation d'une application en passant de Vue2 à Vue3.",
        image: "/images/projects/auchan.png", // Chemin relatif vers l'image
        tags: ["JavaScript", "Vue2", "Vue3"],
        liveUrl: "#", // Remplacer par le lien réel
        githubUrl: "#" // Remplacer par le lien GitHub si disponible
    },
    {
        id: 2,
        title: "Réseau Social en Java",
        description: "Création d'un réseau social utilisant Java et Spring Framework.",
        image: "/images/projects/picit.png",
        tags: ["Java", "Spring Framework", "SQL"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Marathon du Web",
        description: "Création d'un site web back-end en équipe durant 48 heures.",
        image: "/images/projects/travaux.png",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Site Web Personnel",
        description: "Création d'un site web en HTML/CSS pour une future friterie.",
        image: "/images/projects/travaux.png",
        tags: ["HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "#"
    }
]

export default function Projects() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
            <Navigation />
            <main className="container mx-auto px-6 pt-24 pb-12">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mes Projets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden">
                            {/* Image optimisée avec next/image */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-md"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <Badge key={index} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <div className="flex space-x-2">
                                    <Button size="sm" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Voir le projet
                                        </a>
                                    </Button>
                                    <Button size="sm" variant="outline" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> GitHub
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}
