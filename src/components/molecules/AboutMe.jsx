import React from "react";
const AboutMe = () => {
    return (
        <>
            <div className="">
                <h1 className="text-3xl font-semibold ">About Me</h1>
                <hr className="my-5" />
                <p>Hi everyone, my name is Muhammad Raihan Alifiandra. Im a Junior web devloper, Computer Science Student, Free and Open Source Software Ethuesiast. I live in Balikpapan, Indonesia. I was Born in Tanjung Pinang. 9 April 2004. I'm 19 year old. </p>
                <p className="mb-3">Coding has been my passion and hobby since I was 15 years old, and i love computer science i was a kid. Besides coding. I love listening to music and drawing. Sometimes I watch anime, but I prefer read manga and novel, I spend a lot of time on Facebook sharing memes and shitposts</p>
            </div>
            <div className="mt-10">
                <h1 className="text-2xl font-semibold mb-5">What I'm Doing Now</h1>
                <ul className="list-disc ml-5">
                    <li>Enjoying Life. exactly</li>
                    <li>Go to College</li>
                    <li>Learn to be more productive</li>
                    <li>Learn Golang, Cryptography, Pentesting</li>
                </ul>
            </div>
        </>
    )
}

export default AboutMe