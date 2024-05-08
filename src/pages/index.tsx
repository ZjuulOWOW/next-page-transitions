import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import Inner from "@/components/layout/inner"

const inter = Inter({ subsets: ["latin"] })

export default function Page() {
    
    return (
        <Inner>
            <Link href={"/about"}> About</Link>
            <Image
                src="/placeholder.jpg"
                width={500}
                height={300}
                layout="responsive"
                alt="A placeholder image"
            />
        </Inner>
    )
}
