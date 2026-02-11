import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaAward } from 'react-icons/fa'

const Achievements = () => {
    const certifications = [
        {
            title: 'MentHER Women Mentorship Program',
            issuer: 'AWS India Tech Alliance',
            icon: FaAward
        },
        {
            title: 'Apna College Sigma 4.0',
            issuer: 'Certificate of Completion',
            icon: FaAward
        }
    ]

    return (
        <section className="py-24 px-6 md:px-20 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4 text-slate-900">
                    <span className="text-accent">05.</span> Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card flex items-start gap-4 p-6"
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent/10 text-slate-900 flex items-center justify-center flex-shrink-0">
                                <cert.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    {cert.issuer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements
