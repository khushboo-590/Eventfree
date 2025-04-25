import phoneIcon from '../assets/images/svg/phone.svg';
import messageIcon from '../assets/images/svg/message.svg';
import headphoneIcon from '../assets/images/svg/headphone.svg';
import cupIcon from '../assets/images/svg/cup.svg';
import twoImg from '../assets/images/png/crad-1.png'
import oneImg from '../assets/images/png/card-2.png'
import shareIcon from '../assets/images/svg/share.svg';
import infoIcon from '../assets/images/svg/circle.svg';
import helpIcon from '../assets/images/svg/help.svg';
import img1 from '../assets/images/png/footerImg.png'
import img2 from '../assets/images/png/footer1.png'
import img3 from '../assets/images/png/footer2.png'
import img4 from '../assets/images/png/footer3.png'
import img5 from '../assets/images/png/footer-4.png'

export const cardData = [
    {
        icon: phoneIcon,
        title: "8800",
        description: "PARTICIPANTS",
    },
    {
        icon: messageIcon,
        title: "300",
        description: "TOPICS",
    },
    {
        icon: headphoneIcon,
        title: "50",
        description: "SPEAKERS",
    },
    {
        icon: cupIcon,
        title: "30",
        description: "AWARDS",
    },
];



 export const loremData = [
    {
         id: 1,
         date:"09/23/2021",
        img: twoImg, 
         title: "Lorem ipsum",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
    },
    {
        id: 2,
        date:"09/23/2021",
        img: oneImg, 
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
    },
];


export const cards = [
    {
        title: "Sharing",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
        icon: shareIcon,
    },
    {
        title: "Info",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
        icon: infoIcon,
    },
    {
        title: "Info",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
        icon: helpIcon,
    },
];


export const services = [
    { name: 'About' },
    { name: 'News' },
    { name: 'ullamcorper' },
    { name: 'Contact' }
];

export const events = [
    { name: 'ullamcorper' },
    { name: 'ullamcorper' },
    { name: 'ullamcorper' },
    { name: 'ullamcorper' }
];

export const galleryImages = [
    { src: img1, alt: 'selfie' },
    { src: img2, alt: 'img2' },
    { src: img3, alt: 'crowd' },
    { src: img4, alt: 'lighting' },
    { src: img5, alt: 'funImage' }
];
