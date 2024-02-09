import React from "react"
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCards"
import { useState } from "react"
import { projects } from "../../data/constant"
import { Link as LinkR } from "react-router-dom";

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


const HomeButton = styled(LinkR)`
    margin-top: 50px;
    padding: 8px 18px;
    border: 3px solid #ff900e;
    border-radius: 6px;
    color: #ff900e;
    text-decoration: none;
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


const ProjectPage = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

    const handleButtonClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Container>
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked 2D art and 3D Model projects. Here are some of my projects.
          </Desc>
          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === '2d art' ?
              <ToggleButton active value="2d art" onClick={() => setToggle('2d art')}>2D Illustration(s)</ToggleButton>
              :
              <ToggleButton value="2d art" onClick={() => setToggle('2d art')}>2D Illustration(s)</ToggleButton>
            }
            <Divider />
            {toggle === '3d model' ?
              <ToggleButton active value="3d model" onClick={() => setToggle('3d model')}>3D Model(s)</ToggleButton>
              :
              <ToggleButton value="3d model" onClick={() => setToggle('3d model')}>3D Model(s)</ToggleButton>
            }
            <Divider />
            {toggle === 'other proj' ?
              <ToggleButton active value="other proj" onClick={() => setToggle('other proj')}>Other project(s)</ToggleButton>
              :
              <ToggleButton value="other proj" onClick={() => setToggle('other proj')}>Other project(s)</ToggleButton>
            }
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === 'all' &&
              sortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
            {sortedProjects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
          </CardContainer>
          <HomeButton to='/' onClick={handleButtonClick}>Home</HomeButton>
        </Wrapper>
      </Container>
    )
  }
  
  export default ProjectPage