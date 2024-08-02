// Image Imports
import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"
import tour5 from "./images/tour-5.jpeg"
import tour6 from "./images/tour-6.jpeg"

export const pageLinks = [
    { id: 1, href: '#home', name: 'home' },
    { id: 2, href: '#about', name: 'about' },
    { id: 3, href: '#services', name: 'services' },
    { id: 4, href: '#tours', name: 'tours' }
]

export const socialLinks = [
    { id: 1, href: "https://www.facebook.com/", iconClass: "fab fa-facebook" },
    { id: 2, href: "https://www.twitter.com/", iconClass: "fab fa-twitter" },
    { id: 3, href: "https://www.squarespace.com/", iconClass: "fab fa-squarespace" }
]

export const services = [
    {
        id: 1,
        iconClass: "fas fa-wallet fa-fw",
        title: "saving money",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id: 2,
        iconClass: "fas fa-tree fa-fw",
        title: "endless hiking",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id: 3,
        iconClass: "fas fa-socks fa-fw",
        title: "amazing comfort",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    }
]

export const tours = [
    {
        id: 1,
        img: tour1,
        date: "august 26th, 2024",
        title: 'Tibet Adventure',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        amount: '$2100'
    },
    {
        id: 2,
        img: tour2,
        date: "october 1st, 2024",
        title: 'best of java',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'indonesia',
        duration: 11,
        amount: '$1400'
    },
    {
        id: 3,
        img: tour3,
        date: "september 15th, 2024",
        title: 'explore hong kong',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'hong kong',
        duration: 8,
        amount: '$5000'
    },
    {
        id: 4,
        img: tour4,
        date: "december 5th, 2024",
        title: 'kenya highlights',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'kenya',
        duration: 20,
        amount: '$3300'
    },
    {
        id: 5,
        img: tour5,
        date: "november 12th, 2024",
        title: 'tanzania safari',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'tanzania',
        duration: 7,
        amount: '$3500'
    },
    {
        id: 6,
        img: tour6,
        date: "january 18th, 2025",
        title: 'explore india',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'india',
        duration: 10,
        amount: '$2500'
    }
]