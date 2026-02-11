import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const headingRef = useRef()

    useEffect(() => {
        gsap.fromTo(headingRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true
                }
            }
        )
    }, [])
    const experiences = [
        {
            title: 'Embedded & IoT Intern',
            company: 'VS Informatics Pvt. Ltd., Nagpur',
            period: 'Jun 2025 – Aug 2025',
            type: 'exp'
        },
        {
            title: 'B.Tech – Electronics & Telecommunication',
            company: 'MKSSS Cummins College of Engineering for Women • CGPA: 7.09/10',
            period: '2022 – 2026',
            type: 'edu'
        },
        {
            title: 'HSC',
            company: 'New English High School & Junior College, Wardha • 51.67%',
            period: '2020 – 2022',
            type: 'edu'
        },
        {
            title: 'SSC',
            company: 'Sushil Himmat Singka Vidyalaya, Wardha • 82.20%',
            period: '2020',
            type: 'edu'
        }
    ]

    return (
        <section id="about" className="py-24 px-6 md:px-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16"
                >
                    <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                        <span className="text-accent">01.</span> About Me
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 text-lg leading-relaxed">
                        <div>
                            <p className="mb-6">
                                I am a B.Tech student in Electronics and Telecommunication Engineering at MKSSS Cummins College of Engineering for Women. I enjoy solving real-world problems using a combination of full-stack development and embedded systems.
                            </p>
                            <p>
                                I have hands-on experience building MERN stack platforms, healthcare systems, and IoT solutions using Arduino, ESP8266, Raspberry Pi, and cloud services. I am passionate about clean UI, scalable architecture, and impactful technology.
                            </p>
                        </div>

                        <div id="resume" className="space-y-6">
                            <h3 className="text-slate-900 font-bold text-xl flex items-center gap-3">
                                <FaBriefcase className="text-accent" /> Experience & Education
                            </h3>
                            <div className="relative border-l border-slate-200 pl-8 space-y-8">
                                {experiences.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-2 border-accent shadow-sm" />
                                        <div className="text-accent text-sm font-mono mb-1">{item.period}</div>
                                        <h4 className="text-slate-900 font-bold">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.company}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
