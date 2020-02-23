import React from 'react';
import ProfilePicture from '../photos/profile.jpg';

function About() {
    return (

        <div className="container">
            <div className="col-sm-12">
                <div className="media">
                    <img src={ProfilePicture} className="rounded-circle" alt="profile" />
                    <div className="media-body">
                        <h5 className="text-light">About Me</h5>

                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9">
                                <div className="p-3 mb-2 bg-secondary text-white">
                                    <p className="text-justify">With almost 10 years of professional experience, I've
                                        committed the last several years towards a more technical career.
                                </p>
                                    <p className="text-justify">I've sucessfully made a transtion from
                                    business roles and currently work as a Configuration Engineer at Liberty Mutual.</p>
                                    <p className="text-justify">Though software configuration is rewarding, my aspiration is to
                                        always improve my coding skills and start coding
                                        professionally. I will graduate UNH's Coding
                                        Bootcamp in March, which is a giant step towards accomplishing my goal.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About;