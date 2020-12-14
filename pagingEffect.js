new fullpage("#fullpage", {
    anchors: ['firstPage','secondPage', 'thirdPage'],
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['HOME', 'BR8S', 'PROJECTS'],
    navigationPosition: 'right',
    loopBottom: true,
    bigSectionsDestination: top,

    onLeave: (origin, destination, direction) =>{
        if(origin.index === 0 && destination.index === 1){
            const tl = new TimelineMax({ delay: 0.5 });
            const about = document.querySelector(".about");
            tl.fromTo(about, 1, { y: "20%", opacity: 0}, { y: "0%", opacity: 1});
        }

        if(origin.index === 2 && destination.index === 1){
            const tl = new TimelineMax({ delay: 0.5 });
            const about = document.querySelector(".about");
            tl.fromTo(about, 1, { y: "-20%", opacity: 0}, { y: "0%", opacity: 1});
        }

        if(origin.index === 1 && destination.index === 2 || origin.index === 0 && destination.index === 2){
            const tl = new TimelineMax({ delay: 0.5 });
            const tk = new TimelineMax({ delay: 0.5 });
            const projects = document.querySelector(".projects");
            const grid_container = document.querySelector(".grid-container");
            tl.fromTo(projects, 2, { y: "0%", opacity: 0}, { y: "0%", opacity: 1});
            tk.fromTo(grid_container, 1, { y: "10%", opacity: 0}, { y: "0%", opacity: 1});
        }

    }
});