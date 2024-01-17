import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/Logo_2.png" alt="" width={130} height={30} />
        </Link>
        <p>2024 Kevently. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer