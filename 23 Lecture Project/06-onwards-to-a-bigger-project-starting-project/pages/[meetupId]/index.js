import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails({ meetupData }) {
  console.log(meetupData);
  return <MeetupDetail {...meetupData} />;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://severyn:Password1!2@cluster0.bxdvm.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),

    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m3",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://severyn:Password1!2@cluster0.bxdvm.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
      // meetupData: {
      //   id: meetupId,
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
      //   title: "test",
      //   address: "test",
      //   description: "test",
      // },
    },
  };
}
