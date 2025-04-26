import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/store";

// Function to record visitor information
export async function recordVisitor(visitorId: string, details: object) {
  const visitorRef = doc(collection(db, "visitors"), visitorId);

  const visitorDoc = await getDoc(visitorRef);

  if (visitorDoc.exists()) {
    // Update visit count, recent visit timestamp, and other details for existing visitor
    const currentData = visitorDoc.data();
    await setDoc(
      visitorRef,
      {
        otherDetails: {
          ...details,
        },
        visitCount: currentData.otherDetails.visitCount + 1, // Increment visit count
        recentVisit: Date.now(), // Update timestamp
        visitInIST: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
        visitInUTC: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      },
      { merge: true } // Merge updates with existing data
    );
    console.log("Visitor updated.");
  } else {
    // Create new record for a unique visitor
    await setDoc(visitorRef, {
      otherDetails: {
        ...details,
      },
      visitCount: 1, // First visit
      recentVisit: Date.now(), // Timestamp of visit
      visitInIST: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      }),
      visitInUTC: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    });
    console.log("New visitor recorded.");
  }
}

// Function to count total unique visitors
export async function totalVisitorsCount() {
  const visitorsSnapshot = await getDocs(collection(db, "visitors"));
  return visitorsSnapshot.size; // Count total unique visitors
}

// Function to count recent visitors
export async function recentVisitorsCount() {
  const visitorsSnapshot = await getDocs(collection(db, "visitors"));
  const recentVisitors = visitorsSnapshot.docs.filter((doc) => {
    const recentVisit = doc.data().otherDetails.recentVisit;
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    return now - recentVisit < oneDay;
  });
  return recentVisitors.length; // Count recent visitors
}

// Function to find a specific visitor
export async function findVisitor(visitorId: string) {
  const visitorRef = doc(collection(db, "visitors"), visitorId);
  const visitorDoc = await getDoc(visitorRef);
  if (visitorDoc.exists()) {
    return visitorDoc.data().otherDetails; // Return all details under 'otherDetails'
  } else {
    console.log("Visitor not found.");
    return null;
  }
}
