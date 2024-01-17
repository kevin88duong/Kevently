import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <section className="bg-primary-50 py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-content gap-8"> 
          <h1 className="h1-bold">Host your own events, Connect to others</h1>
          <p className="p-regular-20 md:p-regular-24" >Book and learn from 4000+ mentors in world-class companies all around the world.</p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#events">
              Explore Now
            </Link>
          </Button>
        </div>
        <Image src="/assets/images/hero_2.png" alt="" width={800} height={800} className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" />
      </div>
    </section>
    <section id="events" className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
      <h2 className="h2-bold">Trusted by <br /> Thousands of events</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search
      </div>
    </section>
    </>
  )
}