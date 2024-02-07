import React from "react"
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCards"
import { useState } from "react"
import { projects } from "../../data/constant"
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 0px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 0px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border: 3px solid #ff900e;
    border-radius: 6px;
    color: #ff900e;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: #ff900e;
        color: ${({ theme }) => theme.white};     
        border-color: #ff900e;
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
    transition: all 0.6s ease-in-out;
`;

const Divider = styled.div`
    width: 1.5px;
`;


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
    
`;

const ViewButton = styled.div`
    margin-top: 50px;
    padding: 8px 18px;
    border: 3px solid #ff900e;
    border-radius: 6px;
    color: #ff900e;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: #ff900e;
        color: ${({ theme }) => theme.white};     
        border-color: #ff900e;
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
    transition: all 0.6s ease-in-out;
`;


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const sortedProjects = [...projects].sort((a, b) => a.column - b.column); // Sorting by ascending order of the column

  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('projects');
  };

  // Separate projects into sections based on the selected toggle
  let filteredProjects;
  if (toggle === 'all') {
    filteredProjects = sortedProjects;
  } else {
    filteredProjects = sortedProjects.filter((item) => item.category === toggle);
  }

  // Separate projects into 2D art, 3D model, and other sections
  const twoDArtProjects = filteredProjects.filter((item) => item.category === '2d art').slice(0, 3);
  const threeDModelProjects = filteredProjects.filter((item) => item.category === '3d model').slice(0, 3);
  const otherProjects = filteredProjects.filter((item) => item.category === 'other proj').slice(0, 2);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on 2D art and 3D Model projects. Here are some of my projects.</Desc>
        <ToggleButtonGroup>
          {['all', '2d art', '3d model', 'other proj'].map((category) => (
            <React.Fragment key={category}>
              {toggle === category ? (
                <ToggleButton active onClick={() => setToggle(category)}>
                  {category === 'other proj' ? 'Other project(s)' : `${category.toUpperCase()}(s)`}
                </ToggleButton>
              ) : (
                <ToggleButton onClick={() => setToggle(category)}>
                  {category === 'other proj' ? 'Other project(s)' : `${category.toUpperCase()}(s)`}
                </ToggleButton>
              )}
              {category !== 'other proj' && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && (
            <>
              {twoDArtProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
              {threeDModelProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            </>
          )}
          {toggle === '2d art' && (
            <>
              {twoDArtProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            </>
          )}
          {toggle === '3d model' && (
            <>
              {threeDModelProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            </>
          )}
          {toggle === 'other proj' && (
            <>
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            </>
          )}
        </CardContainer>
        <ViewButton onClick={handleButtonClick}>View All Projects</ViewButton>
      </Wrapper>
    </Container>
  );
};

export default Projects;
