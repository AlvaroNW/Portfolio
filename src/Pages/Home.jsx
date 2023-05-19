import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <div>
            <main className="mx-auto">
                <section>
                    <div>Profile</div>
                    <div className="skills-section d-flex flex-wrap">
                        <h2 className="col-xl-2">Skills</h2>
                        <div className="skill-cards col-lg-10">
                            <Skills />
                        </div>
                    </div>
                </section>
                <article>
                    <div className="d-flex flex-wrap">
                        <div className="col-xl-2 carousels project-section-text">
                            <h2>Projects</h2>
                            <p>
                                Here you can find two types of projects: Group
                                projects from my bootcamp and solo projects.
                                <br />
                                <br />
                                <strong>Group Projects:</strong>
                                <br />
                                As part of my bootcamp experience, I had the
                                opportunity to collaborate with a team of
                                talented individuals. Together, we worked on
                                various projects of which I have selected a
                                couple.
                                <br />
                                <br />
                                <strong>Solo Projects:</strong>
                                <br />
                                In addition to group projects, I have also
                                dedicated significant time to create projects
                                that I found interesting as a way of practice.
                            </p>
                        </div>
                        <div className="col-lg-5 carousels">
                            <h3>Group Projects</h3>
                            <ProjectCarousel />
                        </div>
                        <div className="col-lg-5 carousels">
                            <h3>Solo Projects</h3>
                            <ProjectCarousel />
                        </div>
                    </div>
                </article>
            </main>
            <footer>Copy</footer>
        </div>
    );
}
