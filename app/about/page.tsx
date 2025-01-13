import { Navigation } from '@/components/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
    const skills = [
        "JavaScript", "PHP", "Python", "Java", "HTML5 & CSS3",
        "SQL", "Eclipse", "JetBrains", "Visual Studio Code"
    ];


    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
            <Navigation />
            <main className="container mx-auto px-6 pt-24 pb-12">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">À propos de moi</h1>
                <Card className="mb-8">
                    <CardContent className="pt-6">
                        <p className="text-lg mb-4">
                            Bonjour ! Je suis un développeur web passionné avec une expérience dans la création d&#39;applications web modernes et réactives.
                            J&#39;aime résoudre des problèmes complexes et apprendre de nouvelles technologies pour créer des solutions innovantes.
                        </p>
                        <p className="text-lg mb-4">
                            Mon parcours dans le développement web a commencé il y a 4 ans, et depuis, j&#39;ai travaillé sur une variété de projets passionnants,
                            allant des sites vitrines aux applications web complexes. Je suis toujours à la recherche de nouveaux défis et d&#39;opportunités pour grandir en tant que développeur.
                        </p>
                    </CardContent>
                </Card>
                <h2 className="text-2xl font-semibold mb-4">Mes compétences</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                    {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </main>
        </div>
    )
}

