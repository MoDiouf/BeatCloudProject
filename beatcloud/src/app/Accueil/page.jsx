'use client'
import Link from "next/link"

export default function Accueil(){

    return <>
            <h1>Acceuil</h1>
            <Link href={'/personel'}>Personel</Link>
        </>
}