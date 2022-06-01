import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails({ meetupData }) {
  return <MeetupDetail {...meetupData} />;
}

export function getStaticPaths() {

  const client = await MongoClient.connect(
    "mongodb+srv://severyn:Password1!2@cluster0.bxdvm.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.find();

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
        title: "test",
        address: "test",
        description: "test",
      },
    },
  };
}
