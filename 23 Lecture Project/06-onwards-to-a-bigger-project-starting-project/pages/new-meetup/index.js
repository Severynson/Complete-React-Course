// our-domain.com/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const { push } = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    push("/");
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
