'use client'

import { Navigation } from '@/components/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Formulaire soumis', { name, email, message })
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
            <Navigation />
            <main className="container mx-auto px-6 pt-24 pb-12">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contactez-moi</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Envoyez-moi un message</CardTitle>
                            <CardDescription>Je vous répondrai dans les plus brefs délais.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Input
                                        placeholder="Votre nom"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Votre email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Votre message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button type="submit">Envoyer</Button>
                            </form>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations de contact</CardTitle>
                            <CardDescription>N&#39;hésitez pas à me contacter par ces moyens.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Mail className="text-primary" />
                                <span>guiffroyromain@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="text-primary" />
                                <span>07 82 61 70 91</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="text-primary" />
                                <span>Hénin-Beaumont, France</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

