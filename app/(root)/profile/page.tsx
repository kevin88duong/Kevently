import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getAllEvents, getEventsByUser } from '@/lib/actions/event.actions'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async() => {

    const {sessionClaims} = auth()
    const userId = sessionClaims?.userId as string

    const organizedEvents =  await getEventsByUser({userId, page:1})

  return (
    <>
        {/* This part will display all the users tickets of events they have purchased */}
        <section className="bg-primary-50 py-5 md:py-10">
            <div className="wrapper flex items-center justify-center sm:justify-between ">
                <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
                <Button asChild className="button hidden sm:flex" size="lg">
                    <Link href={"/#events"}>
                        Explore More Events
                    </Link>
                </Button>
            </div>
        </section>

        {/* <section className="wrapper my-8">
            {<Collection data={events?.data} emptyTitle="No event tickets purchased" emptySubtext="Come back later" collectionType="My_Tickets" limit={6} page={1} totalPages={2} urlParamName="ordersPage" />}
        </section> */}

        <section className="bg-primary-50 py-5 md:py-10">
            <div className="wrapper flex items-center justify-center sm:justify-between ">
                <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
                <Button asChild className="button hidden sm:flex" size="lg">
                    <Link href={"/events/create"}>
                         Create New Event
                    </Link>
                </Button>
            </div>
        </section>

         <section className="wrapper my-8">
            {<Collection data={organizedEvents?.data} emptyTitle="No events created yet" emptySubtext="Come back later" collectionType="Events_Organized" limit={6} page={1} totalPages={2} urlParamName="eventsPage" />}
        </section>
    </>
  )
}

export default ProfilePage