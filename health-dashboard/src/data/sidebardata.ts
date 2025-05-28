import { faCalendarDays, faChartLine, faClockRotateLeft, faCommentDots, faGrip, faPhone, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export const navdata=[
    {
        title:"General",
        items:[
            {
                title:"Dashboard",
                icon:faGrip,
                selected:true
            },
            {
                title:"History",
                icon:faClockRotateLeft,
                selected:false
            },
            {
                title:"Calendar",
                icon:faCalendarDays,
                selected:false
            },
            {
                title:"Appointment",
                icon:faSquarePlus,
                selected:false
            },
            {
                title:"Statistics",
                icon:faChartLine,
                selected:false
            },

            
        ]
    },
    {
        title:"Tools",
        items:[
            {
                title:"Chat",
                icon:faCommentDots,
                selected:false
            },
            {
                title:"Support",
                icon:faPhone,
                selected:false
            }
            
        ]
    }
]