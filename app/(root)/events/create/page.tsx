import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


import React from 'react'

const CreateEvent = () => {
    const {sessionClaims} = auth()

    const userId = sessionClaims?.userId as string
    console.log(userId);
    

  if(!userId){
    return(
      <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        User ID was not generated correctly, Please wait 5 seconds and refresh.
      </AlertDescription>
    </Alert>
    ) 
  } else {
    return (
      <>
        <section className="bg-primary-50 py-5 md:py-10">
            <h3 className="wrapper h3-bold text-center sm:text:left">Create Event</h3>
        </section>
        <div className="wrapper my-8">
            <EventForm userId = {userId} type="Create"/>
        </div>
    </>
    )
  }
}

export default CreateEvent