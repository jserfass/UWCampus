

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
            description: "Ranked amongst the top 100 global universities, the University of Washington remains one of the most competitive and oldest universities in the USA’s West Coast. The university has three campuses in Seattle, Bothell and Tacoma with over 54,000 students graduating every year. From Business to Engineering to studying Medicine, it offers a number of programmes both in online and offline mode for students to participate and learn. The university is also famous for its close-knit alumni network spread across the world with 7 Nobel Prize winners, 88 National Academy of Sciences scholars and 101 American Academy of Arts and Sciences! In this blog, we will look at the University of Washington notable alumni from around the world.<br><br> <a href='https://www.usgs.gov/communications-and-publishing/news/earthword-prominence#:~:text=Definition%3A,the%20summit%20above%20sea%20level.' target='_blank' style = 'color: white'>USGS</a>,<br>", 
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
            description: "<b>Years Attended:</B> March 1961 to Early 1964<br><b>School:</b> School of Drama<br><b>Studied:</b> Dramatic arts, Philosophy, & Psychology<br><b>Building:</b> Hutchinson Hall<br><img src='pictures/University_of_Washington_Hutchinson_Hall.jpg' alt='Bruce Lee' width='300'>",
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
            description: "<b>Years Attended:</B> 1973 through 1976<br><b>School:</b> Foster School of Business<br><b>Studied:</b> Accounting<br><b>Building:</b> PACCAR Hall<br><img src='pictures/PACCAR-Hall-Foster-School-of-Business-University-of-Washington_91-2.jpg' alt='Bruce Lee' width='300'>",
            location: {
                center: [-122.30868, 47.65885],
                zoom: 18,
                pitch: 70.00,
                bearing:180,
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