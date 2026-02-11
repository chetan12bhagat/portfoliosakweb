import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaMobileAlt, FaTools } from 'react-icons/fa'

const SkillCard = ({ title, icon: Icon, skills }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="glass-card flex flex-col items-center text-center group"
    >
        <div className="w-16 h-16 rounded-2xl bg-accent/10 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-inner">
            <Icon size={30} />
        </div>
        <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
        <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-600 font-medium">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
)

const Skills = () => {
    const skillSets = [
        {
            title: 'Languages',
            icon: FaCode,
            skills: ['Java', 'JavaScript', 'HTML', 'CSS']
        },
        {
            title: 'Frontend',
            icon: FaCode,
            skills: ['React', 'Responsive UI Design']
        },
        {
            title: 'Backend',
            icon: FaServer,
            skills: ['Node.js', 'Express', 'SQL', 'Firebase']
        },
        {
            title: 'IoT & Embedded',
            icon: FaMobileAlt,
            skills: ['Arduino', 'ESP8266', 'Raspberry Pi', 'DHT11', 'PIR Sensors', 'MQTT']
        },
        {
            title: 'Developer Tools',
            icon: FaTools,
            skills: ['Git', 'GitHub', 'VS Code']
        }
    ]

    return (
        <section id="skills" className="py-24 px-6 md:px-20 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4 text-slate-900">
                    <span className="text-accent">02.</span> Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillSets.map((set, index) => (
                        <SkillCard key={index} {...set} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
