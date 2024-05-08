import Link from "next/link"
import Image from "next/image"
import Inner from "@/components/layout/inner"

export default function Page() {

    return (
        <Inner>
            <Link href={"/"}> About</Link>
            <Image
                src="/placeholder2.jpg"
                width={500}
                height={300}
                layout="responsive"
                alt="A placeholder image"
            />
        </Inner>
    )
}
