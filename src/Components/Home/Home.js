import React from 'react';
import NavBar from './NavBar';
import Event from '../Events/Event'

const volunteerEvents = [
    {
        id:1,
        name: 'Child Support',
        img:'childSupport.png'
    },
    {
        id:2,
        name: 'Refuge Shelter',
        img:'refuseShelter.png'
    },
    {
        id:3,
        name: 'Food Charity',
        img:'foodCharity.png'
    },
    {
        id:4,
        name: 'Host a clothing swap',
        img:'clothSwap.png'
    },
    {
        id:5,
        name: 'Host a river clean-up',
        img:'riverClean.png'
    },
    {
        id:6,
        name: 'Clean water for Life',
        img:'cleanWater.png'
    },
    {
        id:7,
        name: 'Good Education',
        img:'goodEducation.png'
    },
    {
        id:8,
        name: 'New Books For Children',
        img:'newBooks.png'
    },
    {
        id:9,
        name: 'Hosting a study group',
        img:'studyGroup.png'
    },
    {
        id:10,
        name: 'Build Bird Houses',
        img:'birdHouse.png'
    },
    {
        id:11,
        name: 'Organize books for library',
        img:'libraryBooks.png'
    },
    {
        id:12,
        name: 'Seminar for safe driving',
        img:'driveSafety.png'
    },
    {
        id:13,
        name: 'Give Free music lesson',
        img:'musicLessons.png'
    },
    {
        id:14,
        name: 'Teach people how to vote',
        img:'voteRegister.png'
    },
    {
        id:15,
        name: 'Clean up your local park',
        img:'clearnPark.png'
    },
    {
        id:16,
        name: 'Give IT help to local people',
        img:'ITHelp.png'
    },
    {
        id:17,
        name: 'Make shelter for animals',
        img:'animalShelter.png'
    },
    {
        id:18,
        name: 'Baby sit during PTA meeting',
        img:'babySit.png'
    },
    {id:19,
        name: 'Collect Stuffed animals',
        img:'stuffedAnimals.png'
    },
    {
        id:20,
        name: 'Collect School supplies',
        img:'schoolSuffiles.png'
    }
]

const Home = () => {



    return (
        <div className="container">
            <NavBar/>
            <div style={{marginTop:'50px'}} className="row">
                    {
                        volunteerEvents.map(event=><Event key={event.id} event={event}></Event>)
                    }
                </div>
        </div>
    );
};

export default Home;