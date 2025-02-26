// import { initializeApp } from "firebase/app";
// import {getFirestore, collection , doc, setDoc, getDocs} from "firebase/firestore";
// import {Client, Storage} from "appwrite";
// import { firebaseConfig, appwrite_pid } from "@/app/config";

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const client = new Client();
// client.setEndpoint('https://cloud.appwrite.io/v1').setProject(appwrite_pid);
// const storage = new Storage(client);

let events_data = [];
// async function loadAct(){
//     let counter = 1;
//     const snap = await getDocs(collection(db, "activities"));
//     snap.forEach((docs) => {
//         const data = docs.data();
//         const actimg =   storage.getFilePreview('679d7ffd002633f04d7b',`activity-${counter}`);
//         const title = data.title;
//         const desc = data.description;
//         const actobj = {
//             title:title,
//             desc:desc,
//             img:actimg
//         }
//         counter+=1;
//         console.log(actobj);
//         events_data.push(actobj);
//     });
// }
// console.log(events_data);
// loadAct();


events_data = [
    {
        "title": "Supernova",
        "desc": "Supernova is the Astronomy Club's event under Technex, the annual techno-management fest of IIT BHU. It features 4 key events as under: AstroQuiz - A fast- paced quiz on celestial phenomena, space missions, and cosmic mysteries challenging the cosmic understanding of the participants. Scientists of Utopia -  This engages you into a Utopian reality of our world where you encounter multiple realistic questions on physics and Astronomy. Stellar Analytics - Analyze real astronomical data and uncover valuable cosmic insights. SolidBoost : Design and launch your own solid - fuel rockets and reach for the highest.  Explore, compete, and push the boundaries of astronomy and engineering!",
        "img": "/supernova.png",
        "link": "https://unstop.com/college-fests/technex25-indian-institute-of-technology-banaras-hindu-university-300587"
    },
    {
        "title": "National Space Day",
        "desc": "National Space Day is a three-day event hosted in August to commemorate the successful landing of Chandrayaan-3 in 2023. Organized at the institute level, it features exciting events like Astro Quiz, Astro Debate, Solar and Night sky observation sessions, informative stalls, and guest talks on astronomy.In its very first edition of 2024, it played host to Padma Shri Awardee Prof H.C. Verma Sir as the Chief Guest who enlightened everyone with his amazing words. Interactive session on “Ancient Indian Astronomy” was also conducted featuring Dr. V. Ramananthan Sir from IIT(BHU) Varanasi. The Astronomy Club also conducts outreach programs in schools, inspiring young minds and spreading awareness about space science.",
        "img": "/nsd.png",
        "link": "https://www.youtube.com/watch?v=ftiiwx0kSp4"
    },
    {
        "title": "Yuri's Night",
        "desc": "Yuri's Night is the flagship event of The Astronomy Club, IIT (BHU) Varanasi, held in the second week of April to honor Yuri Gagarin’s first spaceflight on April 12, 1961. This three-day celebration features competitions like Pitch beyond Earth, Astro Quiz, Planet Hunt, Cosmic Script, Cosmic Canvas, Astro Pixels, Telescon and Astro Talk engaging students from schools and the Institute. Blending science, technology, and astronomy, it offers a unique chance to explore the cosmos through A Nocturnal Celebration of Darkness. It also hosts many prominent guest talks and sessions from renowned personalities like Dr. Mohd. Hasan (ISRO Scientist) and Steeve Body(Prominent Australian Astrophotographer).",
        "img": "/yuris.png",
        "link": "https://yurisnight.netlify.app/"
    },
    {
        "title": "Astropedia",
        "desc": "The Astronomy Club hosts an event called Astropedia where various workshops, lectures and debates are conducted to benefit the students. These lectures are hosted by both the club members and guest lecturers on astronomy basics, like formation of stars and galaxies, modern astronomy, mathematical and analytical modelling to name a few along with debates and competitions on Astrophysics.",
        "img": "/astropedia.png",
        "link": "https://www.instagram.com/p/DAY5ju3M2ro/"

    },
    {
        "title": "Observational Sessions",
        "desc": "Observations are what solidify any theory. Therefore, we organize observational sessions to help students get acquianted with observational astronomy and navigate the night sky. The club owns various equipments, enabling us to observe a wealth of detail on celestial bodies. We also have a planetarium as a part of our project and its  major application will be to conduct observational sessions.",
        "img": "/obs.png",
        "link": "https://www.instagram.com/p/DFNgTYmy_yM/"
    },
    {
        "title": "Telescon",
        "desc": "Telescon is our first event for freshers, a DIY telescope making competition, in which they learn about the basics by building telescopes from scratch. This event has two rounds, namely Presentation & Telescope Building. In the first round, the teams's ideas are judged on sustainability and feasibility, and in the latter, they build a working model of the telescope.",
        "img": "/telescon.png",
        "link": "https://www.instagram.com/p/C5gSUiYs4CY/"
    },

]

export default events_data