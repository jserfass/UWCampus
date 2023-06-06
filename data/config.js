

var config = {
    style: 'mapbox://styles/jserfass/clh46l1zj008b01r6aj587wll',
    accessToken: 'pk.eyJ1IjoianNlcmZhc3MiLCJhIjoiY2w5eXA5dG5zMDZydDN2cG1zeXduNDF5eiJ9.6-9p8CxqQlWrUIl8gSjmNw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'The University of Washington',
    subtitle: 'Notable Alumni',
    byline: '',
    chapters: [
        {
            id: 'washington',
            alignment: 'full',
            title: 'A Campus Tour: UW Notable Alumni',
            image: 'pictures/UWHuskies.jpg',
            description: "Ranked amongst the top 100 global universities, the University of Washington remains one of the most competitive and oldest universities in the USA’s West Coast. The university has three campuses in Seattle, Bothell and Tacoma with over 54,000 students graduating every year. From Business to Engineering to studying Medicine, it offers a number of programmes both in online and offline mode for students to participate and learn. The university is also famous for its close-knit alumni network spread across the world with 7 Nobel Prize winners, 88 National Academy of Sciences scholars and 101 American Academy of Arts and Sciences.<br><br> The University of Washington, one of the oldest universities on the West Coast, boasts an impressive roster of notable alumni. These distinguished individuals have left their mark on various fields and industries, carrying with them the experiences and knowledge gained during their time at the UW campus. Let's delve into the lives and achievements of some of the renowned alumni who have emerged from the University of Washington.</b>",
            location: {
                center: [-122.3035, 47.6553],
                zoom: 14.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'data/UW Seattle Buildings.kmz',
                    opacity: 1
                },
                {
                    layer: 'npspoly',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'data/UW Seattle Buildings.kmz',
                    opacity: 0
                },
                {
                    layer: 'npspoly',
                    opacity: 0
                }
            ]
        },
        {
            id: 'BruceLee',
            alignment: 'left',
            title: 'Bruce Lee',
            image: 'pictures/Bruce_Lee_1973.jpg',
            description: "<b>Years Attended:</B> March 1961 to Early 1964<br><b>School:</b> School of Drama<br><b>Studied:</b> Dramatic arts, Philosophy, & Psychology<br> <b>Accomplishments:</b> Martial artist, actor, philosopher, & filmmaker. Often cited as a trailblazer for modern mixed martial arts. Also credited for bringing the 'Kung Fu Flick' to the United States. Known for flowing like water while kicking ass.<br><b>Building:</b> Hutchinson Hall<br><img src='pictures/University_of_Washington_Hutchinson_Hall.jpg' alt='Bruce Lee' width='300'>",
            location: {
                center: [-122.30677, 47.65966],
                zoom: 19,
                pitch: 70.00,
                bearing:0,
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                 //    opacity: 0
                // }
            ]
        },
        {
            id: 'KennyG',
            alignment: 'left',
            title: 'Kenny G',
            image: 'pictures/KennyGHWOFMay2013.jpg',
            description: "<b>Graduated:</B> 1976<br> <b>School:</b> Foster School of Business<br><b>Studied:</b> Accounting<br><b>Accomplishments:</b> American smooth jazz saxophonist, composer, and producer. Creater of modern elevator music. Global sales totaling more than 75 million records.<br><b>Building:</b> PACCAR Hall<br><img src='pictures/PACCAR-Hall-Foster-School-of-Business-University-of-Washington_91-2.jpg' alt='Bruce Lee' width='300'>",
            location: {
                center: [-122.30903, 47.65908],
                zoom: 18,
                pitch: 70.00,
                bearing:-19.2,
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                 //    opacity: 0
                // }
            ]
        },
        {
        id: 'WarrenMoon',
        alignment: 'left',
        title: 'Warren Moon',
        image: 'pictures/Washington-Huskies-Warren-Moon-1977.jpg',
        description: "<b>Graduated:</B> 1977<br><b>School:</b> School of Football<br><b>Studied:</b> FOOTBALL<br> <b>Accomplishments:</b> NFL Hall of Fame quarterback most known for his time with the Houston Oilers where he was a 9 time Pro Bowler, NFL Man of the Year (1989), NFL Offensive Player of the Year (1990), & Second-team All-Pro (1990). Moon was also 5× Grey Cup champion (1978–1982) & 2× Grey Cup MVP (1980, 1982) in the Canadian Football League.<br><b>Building:</b> Husky Stadium<br><img src='pictures/Dave-Stadium-aerial-e1316467039617.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.30126, 47.64966],
            zoom: 16.5,
            pitch: 70.00,
            bearing:-81.6,
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    {
        id: 'KimThayil',
        alignment: 'left',
        title: 'Kim Thayil',
        image: 'pictures/FRETPRINTS_KimThayil_01-774x1024.jpg',
        description: "<b>Graduated:</B> 1984<br><b>School:</b> Department of Psychology<br><b>Studied:</b> Psychology<br><b>Accomplishments:</b> One of the founding fathers of the so called 'grunge movement' of the early 90s. Lead guitarist for Soundgarden - one of the preeminent 90s rock/metal bands who won two Grammy awards. Thayil was named the 100th greatest guitarist of all time by Rolling Stone in 2010, and the 67th greatest guitarist of all time by SPIN in 2012.<br><b>Building:</b> Guthrie Hall<br><img src='pictures/guth04.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.31128, 47.65408],
            zoom: 18,
            pitch: 65,
            bearing:-26.39,
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    {
        id: 'MichaelPAnderson',
        alignment: 'left',
        title: 'Michael P. Anderson',
        image: 'pictures/Michael_P._Anderson.jpg',
        description: "<b>Graduated:</B> 1981<br><b>School:</b> Department of Physics/Department of Astronomy<br><b>Studied:</b> Bachelor of Science degree in physics and astronomy <br><b>Accomplishments:</b> Lieutenant Colonel, U.S. Air Force. NASA Astronaut. Member of the unfortunate Space Shuttle Columbia disaster that claimed his life along with six of his crewmmates. Recipient of the Congressional Space Medal of Honor. Spent 24d 18h 08min in space.<br> <b>Building:</b> Physics/Astronomy Building (PAB)<br><img src='pictures/physics2k.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.31167, 47.65315],
            zoom: 17.5,
            pitch: 60,
            bearing:-9.6,
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    {
        id: 'TedBundy',
        alignment: 'left',
        title: 'Ted Bundy',
        image: 'pictures/Ted_Bundy_headshot.jpg',
        description: "<b>Graduated:</B> 1972<br><b>School:</b> Department of Psychology<br> <b>Studied:</b> Psychology, Chinese, & Urban Planning<br><b>Accomplishments:</b> We aren't sure about accomplishments, other than graduating 'with distinction', but Ted certainly was notable.<br> <b>Building:</b> Guthrie Hall<br><img src='pictures/guth04.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.31128, 47.65408],
            zoom: 18,
            pitch: 65,
            bearing:-26.39,
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    {
        id: 'FredBeckey',
        alignment: 'left',
        title: 'Fred Beckey',
        image: 'pictures/Fred_Beckey_-_2014.jpg',
        description: "<b>Graduated:</B> 1949<br><b>School:</b> Michael G. Foster School of Business<br> <b>Studied:</b> Business Administration<br><b>Accomplishments:</b> Beckey is a PNW cult icon. He achieved hundreds of first ascents of some of the tallest peaks and most important routes throughout Alaska, the Canadian Rockies and the Pacific Northwest. He established 7 routes cited in the 50 Classic Climbs of North America. Beckey climbed into his 90s. He also authored the Cascade Alpine Guides & Range of Glaciers. <br> <b>Building:</b> Michael G. Foster School of Business<br><img src='pictures/guth04.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.30817, 47.65915],
            zoom: 18.86,
            pitch: 72.50,
            bearing: 0.00,
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    {
        id: 'EdViesturs',
        alignment: 'left',
        title: 'Ed Viesturs',
        image: 'pictures/Ed.jpg',
        description: "<b>Graduated:</B> 1981<br><b>School:</b> Department of Biology<br> <b>Studied:</b> Zoology<br><b>Accomplishments:</b> First American to climb all 14 eight-thousanders (8,000m peaks); 5th person to do so without Oxygen. National Geographic's Adventurer of the Year (2005). Author of No Shortcuts to the Top: Climbing the World's 14 Highest Peaks, K2: Life and Death on the World's Most Dangerous Mountain, & The Will to Climb: Obsession and Commitment and the Quest to Climb Annapurna--the World's Deadliest Peak. Featured in the 1996 IMAX hit 'Everest'. <br> <b>Building:</b> Life Sciences Building<br><img src='pictures/Cropped-UW-LSB-SW-Entry.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.31001, 47.65212],
            zoom: 17.99,
            pitch: 65.50,
            bearing: -8.80,
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    {
        id: 'BrandonRoy',
        alignment: 'left',
        title: 'Brandon Roy',
        image: 'pictures/57045330_original.jpg',
        description: "<b>Graduated:</B> 2006<br><b>School:</b> Department of American Ethnic Studies<br> <b>Studied:</b> American Ethnic Studies<br><b>Accomplishments:</b> Drafted 6th overall in the 2006 NBA draft. Roy was a 3× NBA All-Star (2008–2010), All-NBA Second Team (2009), All-NBA Third Team (2010), & NBA Rookie of the Year (2007) for the Portland Trail Blazers. As a Washington Husky, Roy was consensus first-team All-American (2006), Pac-10 Player of the Year (2006), First-team All-Pac-10 (2006), & had his No. 3 retired. <br> <b>Building:</b> Life Sciences Building<br><img src='pictures/Padelford2.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.30457, 47.65677],
            zoom: 19,
            pitch: 75.50,
            bearing: -14.40,
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    {
        id: 'PatrickMichaelShanahan',
        alignment: 'left',
        title: 'Patrick Michael Shanahan',
        image: 'pictures/800px-Patrick_Shanahan.jpg',
        description: "<b>Graduated:</B> 1984<br><b>School:</b> College of Engineering<br> <b>Studied:</b> Mechanical Engineering<br><b>Accomplishments:</b> Served as acting U.S. Secretary of Defense in 2019 for President Donald Trump. He also served as the Deputy Secretary of Defense, starting in 2017. Held management roles with respect to the Boeing Missile Defense Systems, as well as commercial airline programs. <br> <b>Building:</b> Mechanical Engineering Building<br><img src='pictures/loew_hall.jpg' alt='Bruce Lee' width='300'>",
        location: {
            center: [-122.30502, 47.65348],
            zoom: 17.5,
            pitch: 73.00,
            bearing: -100.80
        },
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
             //    opacity: 0
            // }
        ]
    },
    ]
};